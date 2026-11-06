"use client";

import { useState } from "react";

type Lead = {
  id: number;
  client_name?: string | null;
  email?: string | null;
  business_name?: string | null;
  industry?: string | null;
  purpose?: string | null;
};

export default function AdminNdaPage() {
  const [leadId, setLeadId] = useState("");

  const [lead, setLead] = useState<Lead | null>(null);

  const [loadingLead, setLoadingLead] =
    useState(false);

  const [creating, setCreating] =
    useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] =
    useState("");

  const [clientUrl, setClientUrl] =
    useState("");

  const [copied, setCopied] =
    useState(false);

  // ========================================
  // LOAD LEAD
  // ========================================

  async function loadLead() {
    if (!leadId.trim()) {
      setError("Please enter a lead ID.");
      return;
    }

    setLoadingLead(true);
    setError("");
    setSuccess("");
    setClientUrl("");
    setLead(null);

    try {
      const response = await fetch(
        `/api/admin/leads?id=${encodeURIComponent(
          leadId.trim()
        )}`,
        {
          cache: "no-store",
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Failed to load lead."
        );
      }

      /*
       * The admin leads API may return
       * website leads in different structures.
       */

      const websiteLead =
        result.websiteLead ||
        result.lead ||
        result.data;

      if (!websiteLead) {
        throw new Error(
          "Lead was not found."
        );
      }

      setLead(websiteLead);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to load lead."
      );
    } finally {
      setLoadingLead(false);
    }
  }

  // ========================================
  // CREATE NDA
  // ========================================

  async function createNda() {
    if (!lead) {
      setError(
        "Please load a lead first."
      );
      return;
    }

    setCreating(true);
    setError("");
    setSuccess("");
    setClientUrl("");
    setCopied(false);

    try {
      const response = await fetch(
        "/api/admin/nda",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            leadId: lead.id,
          }),
        }
      );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Failed to create NDA."
        );
      }

      setSuccess(
        result.message ||
          "NDA created successfully."
      );

      setClientUrl(
        result.nda?.clientUrl || ""
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to create NDA."
      );
    } finally {
      setCreating(false);
    }
  }

  // ========================================
  // COPY LINK
  // ========================================

  async function copyLink() {
    if (!clientUrl) {
      return;
    }

    try {
      await navigator.clipboard.writeText(
        clientUrl
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setError(
        "Could not copy the link."
      );
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-10">

        {/* ========================================
            HEADER
        ======================================== */}

        <div className="mb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                TechCore Studio
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                Create NDA
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Create a secure NDA for a
                website project and generate
                a private signing link for the
                client.
              </p>
            </div>

            <a
              href="/admin/leads"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              ← Back to Leads
            </a>

          </div>
        </div>

        {/* ========================================
            ERROR
        ======================================== */}

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        {/* ========================================
            SUCCESS
        ======================================== */}

        {success && (
          <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
            {success}
          </div>
        )}

        {/* ========================================
            MAIN GRID
        ======================================== */}

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">

          {/* ========================================
              LEFT SIDE
          ======================================== */}

          <div className="space-y-6">

            {/* ========================================
                SELECT CLIENT
            ======================================== */}

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="mb-5">

                <h2 className="text-lg font-bold text-slate-900">
                  1. Select Client
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Enter the website questionnaire
                  lead ID you want to create the
                  NDA for.
                </p>

              </div>

              <div className="flex flex-col gap-3 sm:flex-row">

                <input
                  type="number"
                  value={leadId}
                  onChange={(event) =>
                    setLeadId(
                      event.target.value
                    )
                  }
                  placeholder="Lead ID"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />

                <button
                  type="button"
                  onClick={loadLead}
                  disabled={loadingLead}
                  className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loadingLead
                    ? "Loading..."
                    : "Load Lead"}
                </button>

              </div>

            </section>

            {/* ========================================
                CLIENT INFORMATION
            ======================================== */}

            {lead && (
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="mb-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-lg">
                      👤
                    </div>

                    <div>

                      <h2 className="text-lg font-bold text-slate-900">
                        Client Information
                      </h2>

                      <p className="text-sm text-slate-500">
                        Information pulled from
                        the questionnaire.
                      </p>

                    </div>

                  </div>

                </div>

                <div className="grid gap-5 sm:grid-cols-2">

                  <Info
                    label="Client Name"
                    value={
                      lead.client_name
                    }
                  />

                  <Info
                    label="Email"
                    value={lead.email}
                  />

                  <Info
                    label="Business"
                    value={
                      lead.business_name
                    }
                  />

                  <Info
                    label="Industry"
                    value={lead.industry}
                  />

                  <div className="sm:col-span-2">

                    <Info
                      label="Project / Purpose"
                      value={lead.purpose}
                    />

                  </div>

                </div>

              </section>
            )}

            {/* ========================================
                COMPANY INFORMATION
            ======================================== */}

            {lead && (
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="mb-6">

                  <h2 className="text-lg font-bold text-slate-900">
                    Company Information
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Default TechCore information
                    used on the NDA.
                  </p>

                </div>

                <div className="grid gap-5 sm:grid-cols-2">

                  <Info
                    label="Company"
                    value="TechCore Studio"
                  />

                  <Info
                    label="Website"
                    value="techcorestudio.com"
                  />

                  <Info
                    label="Email"
                    value="info@techcorestudio.com"
                  />

                  <Info
                    label="Phone"
                    value="Not provided"
                  />

                  <Info
                    label="Representative"
                    value="Ryan Haster"
                  />

                  <Info
                    label="Title"
                    value="Sr. Business Consultant"
                  />

                </div>

              </section>
            )}

            {/* ========================================
                AGREEMENT
            ======================================== */}

            {lead && (
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="mb-6">

                  <h2 className="text-lg font-bold text-slate-900">
                    Agreement
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Basic NDA configuration.
                  </p>

                </div>

                <div className="grid gap-5 sm:grid-cols-2">

                  <Info
                    label="Document"
                    value="Non-Disclosure Agreement"
                  />

                  <Info
                    label="Version"
                    value="1.0"
                  />

                  <Info
                    label="Effective Date"
                    value="Automatically generated"
                  />

                  <Info
                    label="Status"
                    value="Pending Client Signature"
                  />

                </div>

              </section>
            )}

          </div>

          {/* ========================================
              RIGHT SIDE
          ======================================== */}

          <aside className="space-y-6">

            {/* ========================================
                SUMMARY
            ======================================== */}

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h2 className="text-lg font-bold text-slate-900">
                NDA Summary
              </h2>

              <div className="mt-5 space-y-4">

                <SummaryRow
                  label="Lead"
                  value={
                    lead
                      ? `#${lead.id}`
                      : "Not selected"
                  }
                />

                <SummaryRow
                  label="Client"
                  value={
                    lead?.client_name ||
                    "—"
                  }
                />

                <SummaryRow
                  label="Company"
                  value={
                    lead?.business_name ||
                    "—"
                  }
                />

                <SummaryRow
                  label="Status"
                  value={
                    clientUrl
                      ? "Created"
                      : "Not created"
                  }
                />

              </div>

            </section>

            {/* ========================================
                CREATE NDA
            ======================================== */}

            {lead && !clientUrl && (
              <section className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm">

                <div className="mb-5">

                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl text-white shadow-sm">
                    ✍️
                  </div>

                  <h2 className="text-lg font-bold text-slate-900">
                    Ready to Create?
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Create a secure private NDA
                    link that you can send to
                    the client for review and
                    signature.
                  </p>

                </div>

                <button
                  type="button"
                  onClick={createNda}
                  disabled={creating}
                  className="w-full rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {creating
                    ? "Creating NDA..."
                    : "Create Secure NDA"}
                </button>

              </section>
            )}

            {/* ========================================
                CLIENT LINK
            ======================================== */}

            {clientUrl && (
              <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">

                <div className="mb-4">

                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-xl text-white">
                    ✓
                  </div>

                  <h2 className="text-lg font-bold text-emerald-950">
                    NDA Created
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-emerald-800">
                    Send this private link to
                    the client.
                  </p>

                </div>

                <div className="rounded-xl border border-emerald-200 bg-white p-3">

                  <p className="break-all text-xs leading-5 text-slate-600">
                    {clientUrl}
                  </p>

                </div>

                <button
                  type="button"
                  onClick={copyLink}
                  className="mt-3 w-full rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                >
                  {copied
                    ? "✓ Link Copied"
                    : "Copy Client Link"}
                </button>

                <a
                  href={clientUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block w-full rounded-xl border border-emerald-200 bg-white px-5 py-3 text-center text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100"
                >
                  Open Client NDA
                </a>

              </section>
            )}

          </aside>

        </div>
      </div>
    </main>
  );
}

// ========================================
// INFO COMPONENT
// ========================================

function Info({
  label,
  value,
}: {
  label: string;
  value?: string | null;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-medium text-slate-900">
        {value || "Not provided"}
      </p>
    </div>
  );
}

// ========================================
// SUMMARY ROW
// ========================================

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3 last:border-0 last:pb-0">

      <span className="text-sm text-slate-500">
        {label}
      </span>

      <span className="max-w-[190px] break-words text-right text-sm font-semibold text-slate-900">
        {value}
      </span>

    </div>
  );
}