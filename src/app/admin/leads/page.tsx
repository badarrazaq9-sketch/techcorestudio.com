"use client";

import { useEffect, useMemo, useState } from "react";

type WebsiteLead = {
  id: number;
  created_at: string;

  client_name?: string;
  email?: string;
  phone?: string;
  industry?: string;
  business_name?: string;
  business_slogan?: string;

  logo_choice?: string;
  has_website?: string;
  existing_website_url?: string;

  purpose?: string;
  color_preferences?: string;
  competitors?: string;

  payment_integration?: string;
  specific_requirements?: string;
  content_pages?: string;
  other_suggestions?: string;

  has_domain?: string;
  domain_provider?: string;
  domain_username?: string;

  has_hosting?: string;
  hosting_provider?: string;
  hosting_username?: string;

  notes?: string;
};

type ContactLead = {
  id: number;
  created_at: string;

  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  service?: string;
  message?: string;
};

type LeadType = "all" | "website" | "contact";

export default function AdminLeadsPage() {
  const [websiteLeads, setWebsiteLeads] = useState<WebsiteLead[]>([]);
  const [contactLeads, setContactLeads] = useState<ContactLead[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [leadType, setLeadType] =
    useState<LeadType>("all");

  const [selectedWebsiteLead, setSelectedWebsiteLead] =
    useState<WebsiteLead | null>(null);

  const [selectedContactLead, setSelectedContactLead] =
    useState<ContactLead | null>(null);

  // ========================================
  // LOAD LEADS FROM SUPABASE API
  // ========================================

  async function loadLeads() {
    try {
      setLoading(true);
      setError("");

      console.log(
        "📊 Loading leads from /api/admin/leads..."
      );

      const response = await fetch(
        "/api/admin/leads",
        {
          method: "GET",
          cache: "no-store",
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        window.location.href = "/admin/login";
        return;
      }

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Failed to load leads."
        );
      }

      setWebsiteLeads(
        data.websiteLeads || []
      );

      setContactLeads(
        data.contactLeads || []
      );

      console.log(
        "✅ Website leads:",
        data.websiteLeads?.length || 0
      );

      console.log(
        "✅ Contact leads:",
        data.contactLeads?.length || 0
      );
    } catch (error) {
      console.error(
        "❌ Dashboard error:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Failed to load leads."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadLeads();
  }, []);

  // ========================================
  // SEARCH WEBSITE LEADS
  // ========================================

  const filteredWebsiteLeads =
    useMemo(() => {
      const query =
        search.toLowerCase().trim();

      if (!query) {
        return websiteLeads;
      }

      return websiteLeads.filter(
        (lead) =>
          [
            lead.client_name,
            lead.email,
            lead.phone,
            lead.business_name,
            lead.industry,
            lead.purpose,
          ]
            .filter(Boolean)
            .some((value) =>
              String(value)
                .toLowerCase()
                .includes(query)
            )
      );
    }, [websiteLeads, search]);

  // ========================================
  // SEARCH CONTACT LEADS
  // ========================================

  const filteredContactLeads =
    useMemo(() => {
      const query =
        search.toLowerCase().trim();

      if (!query) {
        return contactLeads;
      }

      return contactLeads.filter(
        (lead) =>
          [
            lead.name,
            lead.email,
            lead.company,
            lead.budget,
            lead.service,
            lead.message,
          ]
            .filter(Boolean)
            .some((value) =>
              String(value)
                .toLowerCase()
                .includes(query)
            )
      );
    }, [contactLeads, search]);

  // ========================================
  // TOTALS
  // ========================================

  const totalLeads =
    websiteLeads.length +
    contactLeads.length;

  // ========================================
  // DATE FORMAT
  // ========================================

  function formatDate(
    date?: string
  ) {
    if (!date) return "—";

    return new Date(
      date
    ).toLocaleString([], {
      dateStyle: "medium",
      timeStyle: "short",
    });
  }

  // ========================================
  // CLOSE DETAILS
  // ========================================

  function closeDetails() {
    setSelectedWebsiteLead(null);
    setSelectedContactLead(null);
  }

  // ========================================
  // DETAIL VIEW
  // ========================================

  if (
    selectedWebsiteLead ||
    selectedContactLead
  ) {
    const website =
      selectedWebsiteLead;

    const contact =
      selectedContactLead;

    return (
      <main className="min-h-screen bg-[#f6f7f9]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* HEADER */}

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

            <div>

              <button
                onClick={closeDetails}
                className="text-sm text-gray-500 hover:text-black mb-3"
              >
                ← Back to Leads
              </button>

              <h1 className="text-3xl font-semibold text-gray-900">
                {website
                  ? website.client_name ||
                    "Website Lead"
                  : contact?.name ||
                    "Contact Lead"}
              </h1>

              <p className="text-gray-500 mt-1">
                {website
                  ? "Website Questionnaire"
                  : "Contact Form Lead"}
              </p>

            </div>

            <div className="flex gap-2">

              {(website?.email ||
                contact?.email) && (
                <a
                  href={`mailto:${
                    website?.email ||
                    contact?.email
                  }`}
                  className="px-4 py-2.5 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-800"
                >
                  Email Client
                </a>
              )}

              {website?.phone && (
                <a
                  href={`tel:${website.phone}`}
                  className="px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-900 text-sm font-medium hover:bg-gray-50"
                >
                  Call Client
                </a>
              )}

            </div>

          </div>

          {/* WEBSITE QUESTIONNAIRE */}

          {website && (
            <div className="space-y-6">

              <InfoSection title="👤 Client Information">

                <InfoItem
                  label="Client Name"
                  value={
                    website.client_name
                  }
                />

                <InfoItem
                  label="Email"
                  value={
                    website.email
                  }
                />

                <InfoItem
                  label="Phone"
                  value={
                    website.phone
                  }
                />

                <InfoItem
                  label="Industry"
                  value={
                    website.industry
                  }
                />

                <InfoItem
                  label="Business Name"
                  value={
                    website.business_name
                  }
                />

                <InfoItem
                  label="Business Slogan"
                  value={
                    website.business_slogan
                  }
                />

              </InfoSection>

              <InfoSection title="🎯 Project Overview">

                <InfoItem
                  label="Website Purpose"
                  value={
                    website.purpose
                  }
                  wide
                />

                <InfoItem
                  label="Has Existing Website?"
                  value={
                    website.has_website
                  }
                />

                <InfoItem
                  label="Existing Website"
                  value={
                    website.existing_website_url
                  }
                  link
                />

                <InfoItem
                  label="Specific Requirements"
                  value={
                    website.specific_requirements
                  }
                  wide
                />

              </InfoSection>

              <InfoSection title="🎨 Design & Branding">

                <InfoItem
                  label="Logo"
                  value={
                    website.logo_choice
                  }
                />

                <InfoItem
                  label="Color Preferences"
                  value={
                    website.color_preferences
                  }
                />

                <InfoItem
                  label="Competitors / Inspiration"
                  value={
                    website.competitors
                  }
                  wide
                />

                <InfoItem
                  label="Other Suggestions"
                  value={
                    website.other_suggestions
                  }
                  wide
                />

              </InfoSection>

              <InfoSection title="📄 Website Content">

                <InfoItem
                  label="Content / Pages"
                  value={
                    website.content_pages
                  }
                  wide
                />

                <InfoItem
                  label="Payment Integration"
                  value={
                    website.payment_integration
                  }
                />

              </InfoSection>

              <InfoSection title="🌐 Domain">

                <InfoItem
                  label="Has Domain?"
                  value={
                    website.has_domain
                  }
                />

                <InfoItem
                  label="Domain Provider"
                  value={
                    website.domain_provider
                  }
                />

                <InfoItem
                  label="Domain Username"
                  value={
                    website.domain_username
                  }
                />

              </InfoSection>

              <InfoSection title="🖥️ Hosting">

                <InfoItem
                  label="Has Hosting?"
                  value={
                    website.has_hosting
                  }
                />

                <InfoItem
                  label="Hosting Provider"
                  value={
                    website.hosting_provider
                  }
                />

                <InfoItem
                  label="Hosting Username"
                  value={
                    website.hosting_username
                  }
                />

              </InfoSection>

              <InfoSection title="📝 Client Notes">

                <InfoItem
                  label="Notes"
                  value={
                    website.notes
                  }
                  wide
                />

              </InfoSection>

              <div className="text-sm text-gray-400">
                Lead received:{" "}
                {formatDate(
                  website.created_at
                )}
              </div>

            </div>
          )}

          {/* CONTACT LEAD */}

          {contact && (
            <div className="space-y-6">

              <InfoSection title="👤 Lead Information">

                <InfoItem
                  label="Name"
                  value={
                    contact.name
                  }
                />

                <InfoItem
                  label="Email"
                  value={
                    contact.email
                  }
                />

                <InfoItem
                  label="Company"
                  value={
                    contact.company
                  }
                />

                <InfoItem
                  label="Budget"
                  value={
                    contact.budget
                  }
                />

                <InfoItem
                  label="Service"
                  value={
                    contact.service
                  }
                />

              </InfoSection>

              <InfoSection title="💬 Client Message">

                <InfoItem
                  label="Message"
                  value={
                    contact.message
                  }
                  wide
                />

              </InfoSection>

              <div className="text-sm text-gray-400">
                Lead received:{" "}
                {formatDate(
                  contact.created_at
                )}
              </div>

            </div>
          )}

        </div>
      </main>
    );
  }

  // ========================================
  // MAIN DASHBOARD
  // ========================================

  return (
    <main className="min-h-screen bg-[#f6f7f9]">

      {/* HEADER */}

      <header className="bg-white border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>

              <h1 className="text-2xl font-semibold text-gray-900">
                TechCore Studio
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Lead Management Dashboard
              </p>

            </div>

            <button
              onClick={loadLeads}
              disabled={loading}
              className="px-4 py-2.5 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-800 disabled:opacity-50"
            >
              {loading
                ? "Refreshing..."
                : "↻ Refresh Leads"}
            </button>

          </div>

        </div>

      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ERROR */}

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* STATS */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

          <StatCard
            title="Total Leads"
            value={totalLeads}
            icon="📊"
          />

          <StatCard
            title="Website Projects"
            value={
              websiteLeads.length
            }
            icon="🌐"
          />

          <StatCard
            title="Contact Leads"
            value={
              contactLeads.length
            }
            icon="📩"
          />

        </div>

        {/* SEARCH */}

        <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-6">

          <div className="flex flex-col lg:flex-row gap-3">

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(
                  event.target.value
                )
              }
              placeholder="Search name, email, company, service..."
              className="flex-1 h-11 px-4 rounded-xl border border-gray-200 outline-none focus:border-black focus:ring-2 focus:ring-black/10"
            />

            <div className="flex gap-2 flex-wrap">

              <FilterButton
                active={
                  leadType === "all"
                }
                onClick={() =>
                  setLeadType("all")
                }
              >
                All
              </FilterButton>

              <FilterButton
                active={
                  leadType ===
                  "website"
                }
                onClick={() =>
                  setLeadType(
                    "website"
                  )
                }
              >
                🌐 Website
              </FilterButton>

              <FilterButton
                active={
                  leadType ===
                  "contact"
                }
                onClick={() =>
                  setLeadType(
                    "contact"
                  )
                }
              >
                📩 Contact
              </FilterButton>

            </div>

          </div>

        </div>

        {/* LOADING */}

        {loading && (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
            <p className="text-gray-500">
              Loading leads from
              Supabase...
            </p>
          </div>
        )}

        {/* WEBSITE LEADS */}

        {!loading &&
          (leadType === "all" ||
            leadType ===
              "website") && (
            <section className="mb-8">

              <div className="mb-4">

                <h2 className="text-lg font-semibold text-gray-900">
                  🌐 Website Questionnaire
                  Leads
                </h2>

                <p className="text-sm text-gray-500">
                  {
                    filteredWebsiteLeads.length
                  }{" "}
                  leads
                </p>

              </div>

              {filteredWebsiteLeads.length ===
              0 ? (
                <EmptyState text="No website questionnaire leads found." />
              ) : (
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

                  <div className="overflow-x-auto">

                    <table className="w-full text-sm">

                      <thead className="bg-gray-50 border-b border-gray-200">

                        <tr>

                          <th className="text-left px-5 py-4 font-medium text-gray-500">
                            Client
                          </th>

                          <th className="text-left px-5 py-4 font-medium text-gray-500">
                            Business
                          </th>

                          <th className="text-left px-5 py-4 font-medium text-gray-500">
                            Industry
                          </th>

                          <th className="text-left px-5 py-4 font-medium text-gray-500">
                            Purpose
                          </th>

                          <th className="text-left px-5 py-4 font-medium text-gray-500">
                            Date
                          </th>

                          <th className="text-right px-5 py-4 font-medium text-gray-500">
                            Action
                          </th>

                        </tr>

                      </thead>

                      <tbody className="divide-y divide-gray-100">

                        {filteredWebsiteLeads.map(
                          (lead) => (
                            <tr
                              key={`website-${lead.id}`}
                              className="hover:bg-gray-50"
                            >

                              <td className="px-5 py-4">

                                <div className="font-medium text-gray-900">
                                  {lead.client_name ||
                                    "—"}
                                </div>

                                <div className="text-xs text-gray-500 mt-1">
                                  {lead.email ||
                                    "—"}
                                </div>

                              </td>

                              <td className="px-5 py-4 text-gray-700">
                                {lead.business_name ||
                                  "—"}
                              </td>

                              <td className="px-5 py-4 text-gray-700">
                                {lead.industry ||
                                  "—"}
                              </td>

                              <td className="px-5 py-4 text-gray-700 max-w-xs">
                                <div className="truncate">
                                  {lead.purpose ||
                                    "—"}
                                </div>
                              </td>

                              <td className="px-5 py-4 text-gray-500 whitespace-nowrap">
                                {formatDate(
                                  lead.created_at
                                )}
                              </td>

                              <td className="px-5 py-4 text-right">

                                <button
                                  onClick={() =>
                                    setSelectedWebsiteLead(
                                      lead
                                    )
                                  }
                                  className="px-3 py-2 rounded-lg bg-black text-white text-xs font-medium hover:bg-gray-800"
                                >
                                  View Lead
                                </button>

                              </td>

                            </tr>
                          )
                        )}

                      </tbody>

                    </table>

                  </div>

                </div>
              )}

            </section>
          )}

        {/* CONTACT LEADS */}

        {!loading &&
          (leadType === "all" ||
            leadType ===
              "contact") && (
            <section>

              <div className="mb-4">

                <h2 className="text-lg font-semibold text-gray-900">
                  📩 Contact Form Leads
                </h2>

                <p className="text-sm text-gray-500">
                  {
                    filteredContactLeads.length
                  }{" "}
                  leads
                </p>

              </div>

              {filteredContactLeads.length ===
              0 ? (
                <EmptyState text="No contact leads found." />
              ) : (
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

                  <div className="overflow-x-auto">

                    <table className="w-full text-sm">

                      <thead className="bg-gray-50 border-b border-gray-200">

                        <tr>

                          <th className="text-left px-5 py-4 font-medium text-gray-500">
                            Name
                          </th>

                          <th className="text-left px-5 py-4 font-medium text-gray-500">
                            Company
                          </th>

                          <th className="text-left px-5 py-4 font-medium text-gray-500">
                            Service
                          </th>

                          <th className="text-left px-5 py-4 font-medium text-gray-500">
                            Budget
                          </th>

                          <th className="text-left px-5 py-4 font-medium text-gray-500">
                            Date
                          </th>

                          <th className="text-right px-5 py-4 font-medium text-gray-500">
                            Action
                          </th>

                        </tr>

                      </thead>

                      <tbody className="divide-y divide-gray-100">

                        {filteredContactLeads.map(
                          (lead) => (
                            <tr
                              key={`contact-${lead.id}`}
                              className="hover:bg-gray-50"
                            >

                              <td className="px-5 py-4">

                                <div className="font-medium text-gray-900">
                                  {lead.name ||
                                    "—"}
                                </div>

                                <div className="text-xs text-gray-500 mt-1">
                                  {lead.email ||
                                    "—"}
                                </div>

                              </td>

                              <td className="px-5 py-4 text-gray-700">
                                {lead.company ||
                                  "—"}
                              </td>

                              <td className="px-5 py-4 text-gray-700">
                                {lead.service ||
                                  "—"}
                              </td>

                              <td className="px-5 py-4 text-gray-700">
                                {lead.budget ||
                                  "—"}
                              </td>

                              <td className="px-5 py-4 text-gray-500 whitespace-nowrap">
                                {formatDate(
                                  lead.created_at
                                )}
                              </td>

                              <td className="px-5 py-4 text-right">

                                <button
                                  onClick={() =>
                                    setSelectedContactLead(
                                      lead
                                    )
                                  }
                                  className="px-3 py-2 rounded-lg bg-black text-white text-xs font-medium hover:bg-gray-800"
                                >
                                  View Lead
                                </button>

                              </td>

                            </tr>
                          )
                        )}

                      </tbody>

                    </table>

                  </div>

                </div>
              )}

            </section>
          )}

      </div>

    </main>
  );
}

// ========================================
// STAT CARD
// ========================================

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>

          <p className="text-3xl font-semibold text-gray-900 mt-2">
            {value}
          </p>

        </div>

        <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-xl">
          {icon}
        </div>

      </div>

    </div>
  );
}

// ========================================
// FILTER BUTTON
// ========================================

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
        active
          ? "bg-black text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {children}
    </button>
  );
}

// ========================================
// EMPTY STATE
// ========================================

function EmptyState({
  text,
}: {
  text: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center">

      <div className="text-gray-400 text-sm">
        {text}
      </div>

    </div>
  );
}

// ========================================
// INFO SECTION
// ========================================

function InfoSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">

        <h2 className="font-semibold text-gray-900">
          {title}
        </h2>

      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {children}
      </div>

    </section>
  );
}

// ========================================
// INFO ITEM
// ========================================

function InfoItem({
  label,
  value,
  wide = false,
  link = false,
}: {
  label: string;
  value?: string;
  wide?: boolean;
  link?: boolean;
}) {
  return (
    <div
      className={
        wide
          ? "md:col-span-2"
          : ""
      }
    >

      <p className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-1.5">
        {label}
      </p>

      {link && value ? (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline break-all"
        >
          {value}
        </a>
      ) : (
        <div className="text-sm text-gray-800 whitespace-pre-wrap break-words">
          {value ||
            "Not provided"}
        </div>
      )}

    </div>
  );
}