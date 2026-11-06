"use client";

import { useEffect, useState } from "react";

type NdaLead = {
  id: number;
  client_name?: string;
  email?: string;
  phone?: string;
  industry?: string;
  business_name?: string;
  business_slogan?: string;
  purpose?: string;
  specific_requirements?: string;
};

type NdaModalProps = {
  open: boolean;
  lead?: NdaLead | null;
  onClose: () => void;
};

type FormState = {
  companyName: string;
  website: string;
  companyEmail: string;
  companyPhone: string;
  representative: string;
  representativeTitle: string;

  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientCompany: string;

  ndaTitle: string;
  effectiveDate: string;
  projectPurpose: string;
  term: string;
  governingLaw: string;
};

const DEFAULT_FORM: FormState = {
  companyName: "TechCore Studio",
  website: "https://techcorestudio.com",
  companyEmail: "info@techcorestudio.com",
  companyPhone: "",
  representative: "Ryan Haster",
  representativeTitle: "Sr. Business Consultant",

  clientName: "",
  clientEmail: "",
  clientPhone: "",
  clientCompany: "",

  ndaTitle: "Mutual Non-Disclosure Agreement",
  effectiveDate: new Date().toISOString().slice(0, 10),
  projectPurpose:
    "Evaluation, discussion, planning, design, development, and potential business collaboration.",
  term: "3 years",
  governingLaw: "United States and applicable state jurisdiction",
};

export default function NdaModal({
  open,
  lead,
  onClose,
}: NdaModalProps) {
  const [form, setForm] = useState<FormState>(DEFAULT_FORM);
  const [logo, setLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState("");
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;

    setError("");
    setLogo(null);
    setLogoPreview("");

    setForm({
      ...DEFAULT_FORM,

      clientName: lead?.client_name || "",
      clientEmail: lead?.email || "",
      clientPhone: lead?.phone || "",
      clientCompany: lead?.business_name || "",

      projectPurpose:
        lead?.purpose ||
        lead?.specific_requirements ||
        DEFAULT_FORM.projectPurpose,
    });
  }, [open, lead]);

  if (!open) {
    return null;
  }

  function updateField(
    field: keyof FormState,
    value: string
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function handleLogoChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file for the logo.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Logo must be smaller than 5 MB.");
      return;
    }

    setError("");
    setLogo(file);

    const reader = new FileReader();

    reader.onload = () => {
      setLogoPreview(String(reader.result || ""));
    };

    reader.readAsDataURL(file);
  }

  function removeLogo() {
    setLogo(null);
    setLogoPreview("");
  }

  async function generatePdf() {
    setError("");

    if (!form.clientName.trim()) {
      setError("Client name is required.");
      return;
    }

    if (!form.clientEmail.trim()) {
      setError("Client email is required.");
      return;
    }

    if (!form.companyName.trim()) {
      setError("Your company name is required.");
      return;
    }

    try {
      setGenerating(true);

      const formData = new FormData();

      formData.append("companyName", form.companyName);
      formData.append("website", form.website);
      formData.append("companyEmail", form.companyEmail);
      formData.append("companyPhone", form.companyPhone);
      formData.append("representative", form.representative);
      formData.append(
        "representativeTitle",
        form.representativeTitle
      );

      formData.append("clientName", form.clientName);
      formData.append("clientEmail", form.clientEmail);
      formData.append("clientPhone", form.clientPhone);
      formData.append("clientCompany", form.clientCompany);

      formData.append("ndaTitle", form.ndaTitle);
      formData.append(
        "effectiveDate",
        form.effectiveDate
      );
      formData.append(
        "projectPurpose",
        form.projectPurpose
      );
      formData.append("term", form.term);
      formData.append(
        "governingLaw",
        form.governingLaw
      );

      if (lead?.id) {
        formData.append(
          "leadId",
          String(lead.id)
        );
      }

      if (logo) {
        formData.append("logo", logo);
      }

      const response = await fetch(
        "/api/admin/nda/pdf",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const data = await response
          .json()
          .catch(() => null);

        throw new Error(
          data?.error ||
            "Unable to generate NDA PDF."
        );
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const anchor = document.createElement("a");

      anchor.href = url;

      anchor.download =
        `NDA-${slugify(
          form.clientName
        )}.pdf`;

      document.body.appendChild(anchor);

      anchor.click();

      anchor.remove();

      window.URL.revokeObjectURL(url);

      onClose();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong while generating the NDA."
      );
    } finally {
      setGenerating(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-200">
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-gray-200 bg-white">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl shadow-sm">
                🛡️
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Create NDA
                </h2>

                <p className="text-sm text-gray-500">
                  {lead
                    ? `Creating NDA for ${
                        lead.client_name ||
                        "selected lead"
                      }`
                    : "Create a standalone NDA"}
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition"
          >
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div className="overflow-y-auto max-h-[calc(92vh-150px)]">
          <div className="p-6 sm:p-8 space-y-8">
            {/* SELECTED LEAD */}
            {lead && (
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                    ✓
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                      Lead Selected
                    </p>

                    <p className="font-semibold text-gray-900 mt-1">
                      {lead.client_name ||
                        "Unnamed Client"}
                    </p>

                    <p className="text-sm text-gray-600">
                      Lead ID: #{lead.id}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* COMPANY */}
            <Section
              title="Your Company"
              description="This information appears as the disclosing party."
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input
                  label="Company Name"
                  value={form.companyName}
                  onChange={(value) =>
                    updateField(
                      "companyName",
                      value
                    )
                  }
                />

                <Input
                  label="Website"
                  value={form.website}
                  onChange={(value) =>
                    updateField(
                      "website",
                      value
                    )
                  }
                />

                <Input
                  label="Company Email"
                  value={form.companyEmail}
                  onChange={(value) =>
                    updateField(
                      "companyEmail",
                      value
                    )
                  }
                />

                <Input
                  label="Company Phone"
                  value={form.companyPhone}
                  onChange={(value) =>
                    updateField(
                      "companyPhone",
                      value
                    )
                  }
                />

                <Input
                  label="Representative"
                  value={form.representative}
                  onChange={(value) =>
                    updateField(
                      "representative",
                      value
                    )
                  }
                />

                <Input
                  label="Representative Title"
                  value={
                    form.representativeTitle
                  }
                  onChange={(value) =>
                    updateField(
                      "representativeTitle",
                      value
                    )
                  }
                />
              </div>
            </Section>

            {/* CLIENT */}
            <Section
              title="Client / Receiving Party"
              description="Lead information is automatically populated when opened from a lead."
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input
                  label="Client Name"
                  required
                  value={form.clientName}
                  onChange={(value) =>
                    updateField(
                      "clientName",
                      value
                    )
                  }
                />

                <Input
                  label="Client Email"
                  required
                  value={form.clientEmail}
                  onChange={(value) =>
                    updateField(
                      "clientEmail",
                      value
                    )
                  }
                />

                <Input
                  label="Client Phone"
                  value={form.clientPhone}
                  onChange={(value) =>
                    updateField(
                      "clientPhone",
                      value
                    )
                  }
                />

                <Input
                  label="Client Company / Business"
                  value={form.clientCompany}
                  onChange={(value) =>
                    updateField(
                      "clientCompany",
                      value
                    )
                  }
                />
              </div>
            </Section>

            {/* LOGO */}
            <Section
              title="Company Logo"
              description="The logo is used only while generating this PDF. It is not stored."
            >
              <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-6">
                {logoPreview ? (
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="w-48 h-28 rounded-2xl bg-white border border-gray-200 flex items-center justify-center p-4">
                      <img
                        src={logoPreview}
                        alt="Logo preview"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    <div className="text-center sm:text-left">
                      <p className="font-semibold text-gray-900">
                        {logo?.name}
                      </p>

                      <p className="text-sm text-gray-500 mt-1">
                        Logo ready for the NDA.
                      </p>

                      <button
                        type="button"
                        onClick={removeLogo}
                        className="mt-3 text-sm font-semibold text-red-600 hover:text-red-700"
                      >
                        Remove logo
                      </button>
                    </div>
                  </div>
                ) : (
                  <label className="cursor-pointer block text-center">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-2xl">
                      📤
                    </div>

                    <p className="mt-4 font-semibold text-gray-900">
                      Upload company logo
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      PNG, JPG, JPEG or WEBP. Maximum 5 MB.
                    </p>

                    <span className="inline-flex mt-4 px-5 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold">
                      Choose Logo
                    </span>

                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      onChange={handleLogoChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </Section>

            {/* AGREEMENT */}
            <Section
              title="Agreement Details"
              description="Customize the NDA before generating it."
            >
              <div className="space-y-5">
                <Input
                  label="Agreement Title"
                  value={form.ndaTitle}
                  onChange={(value) =>
                    updateField(
                      "ndaTitle",
                      value
                    )
                  }
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input
                    label="Effective Date"
                    type="date"
                    value={form.effectiveDate}
                    onChange={(value) =>
                      updateField(
                        "effectiveDate",
                        value
                      )
                    }
                  />

                  <Input
                    label="Confidentiality Term"
                    value={form.term}
                    onChange={(value) =>
                      updateField(
                        "term",
                        value
                      )
                    }
                  />
                </div>

                <TextArea
                  label="Project Purpose"
                  value={form.projectPurpose}
                  onChange={(value) =>
                    updateField(
                      "projectPurpose",
                      value
                    )
                  }
                />

                <Input
                  label="Governing Law"
                  value={form.governingLaw}
                  onChange={(value) =>
                    updateField(
                      "governingLaw",
                      value
                    )
                  }
                />
              </div>
            </Section>

            {/* NOTICE */}
            <div className="rounded-2xl bg-gray-900 text-white p-5">
              <div className="flex gap-4">
                <div className="text-xl">🔒</div>

                <div>
                  <p className="font-semibold">
                    Logo privacy
                  </p>

                  <p className="text-sm text-gray-300 mt-1 leading-6">
                    Your uploaded logo is sent directly to
                    the PDF generator and embedded into the
                    document. We do not save the logo as a
                    permanent file.
                  </p>
                </div>
              </div>
            </div>

            {/* ERROR */}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </div>
            )}
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 sm:px-8 py-5 border-t border-gray-200 bg-gray-50">
          <p className="text-xs text-gray-500">
            The PDF will be downloaded to your computer.
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={generating}
              className="px-5 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-700 text-sm font-semibold hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={generatePdf}
              disabled={generating}
              className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow-sm hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {generating
                ? "Generating..."
                : "Generate NDA PDF"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-4">
        <h3 className="text-base font-bold text-gray-900">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-gray-500 mt-1">
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
        {required && (
          <span className="text-red-500 ml-1">
            *
          </span>
        )}
      </span>

      <input
        type={type}
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </span>

      <textarea
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        rows={4}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none resize-y focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
      />
    </label>
  );
}

function slugify(value: string) {
  return (
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") ||
    "client"
  );
}