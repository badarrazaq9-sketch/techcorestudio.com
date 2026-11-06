"use client";



import {

  useEffect,

  useMemo,

  useState,

  type ReactNode,

} from "react";



import NdaModal from "@/components/admin/NdaModal";



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



type LeadType =

  | "all"

  | "website"

  | "contact";



type SortOrder =

  | "newest"

  | "oldest";



type UnifiedLead = {

  id: number;

  created_at: string;

  type: "website" | "contact";



  name: string;

  email: string;

  company: string;

  category: string;

  secondary: string;



  websiteLead?: WebsiteLead;

  contactLead?: ContactLead;

};



export default function AdminLeadsPage() {

  const [websiteLeads, setWebsiteLeads] =

    useState<WebsiteLead[]>([]);



  const [contactLeads, setContactLeads] =

    useState<ContactLead[]>([]);



  const [loading, setLoading] =

    useState(true);



  const [error, setError] =

    useState("");



  const [search, setSearch] =

    useState("");



  const [leadType, setLeadType] =

    useState<LeadType>("all");



  const [sortOrder, setSortOrder] =

    useState<SortOrder>("newest");



  const [selectedWebsiteLead, setSelectedWebsiteLead] =

    useState<WebsiteLead | null>(null);



  const [selectedContactLead, setSelectedContactLead] =

    useState<ContactLead | null>(null);



  const [ndaOpen, setNdaOpen] =

    useState(false);



  const [ndaLead, setNdaLead] =

    useState<WebsiteLead | null>(null);



  async function loadLeads() {

    try {

      setLoading(true);

      setError("");



      const response = await fetch(

        "/api/admin/leads",

        {

          method: "GET",

          cache: "no-store",

        }

      );



      const data = await response.json();



      if (response.status === 401) {

        window.location.href =

          "/admin/login";

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

    } catch (error) {

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



  const totalLeads =

    websiteLeads.length +

    contactLeads.length;



  const filteredWebsiteLeads =

    useMemo(() => {

      const query =

        search.toLowerCase().trim();



      let results = [...websiteLeads];



      if (query) {

        results = results.filter(

          (lead) =>

            [

              lead.client_name,

              lead.email,

              lead.phone,

              lead.business_name,

              lead.industry,

              lead.purpose,

              lead.specific_requirements,

              lead.content_pages,

            ]

              .filter(Boolean)

              .some((value) =>

                String(value)

                  .toLowerCase()

                  .includes(query)

              )

        );

      }



      results.sort((a, b) => {

        const first = new Date(

          a.created_at

        ).getTime();



        const second = new Date(

          b.created_at

        ).getTime();



        return sortOrder === "newest"

          ? second - first

          : first - second;

      });



      return results;

    }, [

      websiteLeads,

      search,

      sortOrder,

    ]);



  const filteredContactLeads =

    useMemo(() => {

      const query =

        search.toLowerCase().trim();



      let results = [...contactLeads];



      if (query) {

        results = results.filter(

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

      }



      results.sort((a, b) => {

        const first = new Date(

          a.created_at

        ).getTime();



        const second = new Date(

          b.created_at

        ).getTime();



        return sortOrder === "newest"

          ? second - first

          : first - second;

      });



      return results;

    }, [

      contactLeads,

      search,

      sortOrder,

    ]);



  const unifiedLeads =

    useMemo<UnifiedLead[]>(() => {

      const website: UnifiedLead[] =

        filteredWebsiteLeads.map(

          (lead) => ({

            id: lead.id,

            created_at:

              lead.created_at,

            type: "website",



            name:

              lead.client_name ||

              "Unknown Client",



            email:

              lead.email || "",



            company:

              lead.business_name ||

              "—",



            category:

              lead.industry ||

              "Website Project",



            secondary:

              lead.purpose ||

              lead.specific_requirements ||

              "Website questionnaire",



            websiteLead: lead,

          })

        );



      const contact: UnifiedLead[] =

        filteredContactLeads.map(

          (lead) => ({

            id: lead.id,

            created_at:

              lead.created_at,

            type: "contact",



            name:

              lead.name ||

              "Unknown Contact",



            email:

              lead.email || "",



            company:

              lead.company ||

              "—",



            category:

              lead.service ||

              "General Inquiry",



            secondary:

              lead.budget ||

              "Contact form submission",



            contactLead: lead,

          })

        );



      return [...website, ...contact].sort(

        (a, b) => {

          const first = new Date(

            a.created_at

          ).getTime();



          const second = new Date(

            b.created_at

          ).getTime();



          return sortOrder === "newest"

            ? second - first

            : first - second;

        }

      );

    }, [

      filteredWebsiteLeads,

      filteredContactLeads,

      sortOrder,

    ]);



  function closeDetails() {

    setSelectedWebsiteLead(null);

    setSelectedContactLead(null);

  }



  function openNdaForLead(

    lead: WebsiteLead

  ) {

    setNdaLead(lead);

    setNdaOpen(true);

  }



  function openStandaloneNda() {

    setNdaLead(null);

    setNdaOpen(true);

  }



  function closeNda() {

    setNdaOpen(false);

    setNdaLead(null);

  }



  function openUnifiedLead(

    lead: UnifiedLead

  ) {

    if (lead.type === "website") {

      setSelectedWebsiteLead(

        lead.websiteLead || null

      );

      setSelectedContactLead(null);

    } else {

      setSelectedContactLead(

        lead.contactLead || null

      );

      setSelectedWebsiteLead(null);

    }

  }



  function formatDate(date?: string) {

    if (!date) return "—";



    return new Date(date).toLocaleString(

      [],

      {

        dateStyle: "medium",

        timeStyle: "short",

      }

    );

  }





  if (

    selectedWebsiteLead ||

    selectedContactLead

  ) {

    const website =

      selectedWebsiteLead;



    const contact =

      selectedContactLead;



    const name =

      website?.client_name ||

      contact?.name ||

      "Lead";



    const email =

      website?.email ||

      contact?.email ||

      "";



    const phone =

      website?.phone || "";



    return (

      <>

        <main className="min-h-screen bg-[#f4f6f8] text-gray-900">

          <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-gray-200">

            <div className="max-w-[1500px] mx-auto px-5 lg:px-8">

              <div className="min-h-[76px] flex items-center justify-between gap-5">

                <div className="flex items-center gap-4 min-w-0">

                  <button

                    onClick={

                      closeDetails

                    }

                    className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition"

                  >

                    ←

                  </button>



                  <div className="min-w-0">

                    <div className="flex items-center gap-3 flex-wrap">

                      <h1 className="text-xl lg:text-2xl font-bold truncate">

                        {name}

                      </h1>



                      <span

                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide ${

                          website

                            ? "bg-blue-50 text-blue-700"

                            : "bg-emerald-50 text-emerald-700"

                        }`}

                      >

                        <span className="w-1.5 h-1.5 rounded-full bg-current" />



                        {website

                          ? "Website Questionnaire"

                          : "Contact Form"}

                      </span>

                    </div>



                    <p className="text-sm text-gray-500 mt-1">

                      Lead #

                      {website?.id ||

                        contact?.id}

                    </p>

                  </div>

                </div>



                <div className="flex items-center gap-2 flex-wrap justify-end">

                  {website && (

                    <>

                      <button

                        type="button"

                        onClick={() =>

                          openNdaForLead(

                            website

                          )

                        }

                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1D4ED8] transition shadow-sm"

                      >

                        ✦ Create NDA

                      </button>



                      <a

                        href={`/admin/leads/${website.id}/pdf`}

                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-800 text-sm font-semibold hover:bg-gray-50 transition"

                      >

                        ↓ Project PDF

                      </a>

                    </>

                  )}



                  {email && (

                    <a

                      href={`mailto:${email}`}

                      className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-950 text-white text-sm font-semibold hover:bg-gray-800 transition"

                    >

                      ✉ Email

                    </a>

                  )}



                  {phone && (

                    <a

                      href={`tel:${phone}`}

                      className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-800 text-sm font-semibold hover:bg-gray-50 transition"

                    >

                      ☎ Call

                    </a>

                  )}

                </div>

              </div>

            </div>

          </header>



          <div className="max-w-[1500px] mx-auto px-5 lg:px-8 py-7">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">

              <SummaryCard

                label="Client"

                value={name}

                icon="◉"

              />



              <SummaryCard

                label="Email"

                value={

                  email ||

                  "Not provided"

                }

                icon="✉"

              />



              <SummaryCard

                label="Received"

                value={formatDate(

                  website?.created_at ||

                    contact?.created_at

                )}

                icon="◷"

              />

            </div>



            {website && (

              <div className="space-y-6">

                <InfoSection

                  number="01"

                  title="Client Information"

                  subtitle="Primary client and business details"

                >

                  <InfoItem

                    label="Client Name"

                    value={

                      website.client_name

                    }

                  />



                  <InfoItem

                    label="Email"

                    value={website.email}

                  />



                  <InfoItem

                    label="Phone"

                    value={website.phone}

                  />



                  <InfoItem

                    label="Industry"

                    value={website.industry}

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



                <InfoSection

                  number="02"

                  title="Project Overview"

                  subtitle="Website goals and current situation"

                >

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



                <InfoSection

                  number="03"

                  title="Design & Branding"

                  subtitle="Visual direction and inspiration"

                >

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



                <InfoSection

                  number="04"

                  title="Website Content & Features"

                  subtitle="Pages, functionality and integrations"

                >

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



                <div className="grid lg:grid-cols-2 gap-6">

                  <InfoSection

                    number="05"

                    title="Domain"

                    subtitle="Domain setup information"

                  >

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



                  <InfoSection

                    number="06"

                    title="Hosting"

                    subtitle="Hosting setup information"

                  >

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

                </div>



                <InfoSection

                  number="07"

                  title="Client Notes"

                  subtitle="Additional information provided by the client"

                >

                  <InfoItem

                    label="Notes"

                    value={website.notes}

                    wide

                  />

                </InfoSection>



                <div className="grid md:grid-cols-2 gap-5">

                  <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6">

                    <div className="w-11 h-11 rounded-xl bg-white border border-blue-100 flex items-center justify-center text-blue-600 mb-5">

                      ▣

                    </div>



                    <h3 className="text-lg font-bold text-gray-900">

                      Project Requirements PDF

                    </h3>



                    <p className="text-sm text-gray-600 mt-2 leading-6">

                      Generate a clean project requirements document containing the complete questionnaire.

                    </p>



                    <a

                      href={`/admin/leads/${website.id}/pdf`}

                      className="inline-flex mt-5 items-center gap-2 px-5 py-3 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1D4ED8] transition"

                    >

                      Generate Project PDF →

                    </a>

                  </div>



                  <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-6">

                    <div className="w-11 h-11 rounded-xl bg-white border border-indigo-100 flex items-center justify-center text-indigo-600 mb-5">

                      ✦

                    </div>



                    <h3 className="text-lg font-bold text-gray-900">

                      Non-Disclosure Agreement

                    </h3>



                    <p className="text-sm text-gray-600 mt-2 leading-6">

                      Create a branded NDA using this lead's information.

                    </p>



                    <button

                      type="button"

                      onClick={() =>

                        openNdaForLead(

                          website

                        )

                      }

                      className="inline-flex mt-5 items-center gap-2 px-5 py-3 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1D4ED8] transition"

                    >

                      Create NDA →

                    </button>

                  </div>

                </div>



                <div className="text-xs text-gray-400 pb-5">

                  Lead received{" "}

                  {formatDate(

                    website.created_at

                  )}

                </div>

              </div>

            )}



            {contact && (

              <div className="space-y-6">

                <InfoSection

                  number="01"

                  title="Contact Lead"

                  subtitle="Information submitted through the website contact form"

                >

                  <InfoItem

                    label="Name"

                    value={contact.name}

                  />



                  <InfoItem

                    label="Email"

                    value={contact.email}

                  />



                  <InfoItem

                    label="Company"

                    value={contact.company}

                  />



                  <InfoItem

                    label="Service"

                    value={contact.service}

                  />



                  <InfoItem

                    label="Budget"

                    value={contact.budget}

                  />



                  <InfoItem

                    label="Message"

                    value={contact.message}

                    wide

                  />

                </InfoSection>



                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6">

                  <div className="flex gap-4">

                    <div className="w-11 h-11 rounded-xl bg-white border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">

                      ✓

                    </div>



                    <div>

                      <h3 className="font-bold text-gray-900">

                        Contact Form Lead

                      </h3>



                      <p className="text-sm text-gray-600 mt-1 leading-6">

                        This inquiry came through the website contact form. Use the email or phone actions above to follow up.

                      </p>

                    </div>

                  </div>

                </div>



                <div className="text-xs text-gray-400 pb-5">

                  Lead received{" "}

                  {formatDate(

                    contact.created_at

                  )}

                </div>

              </div>

            )}

          </div>

        </main>



        <NdaModal

          open={ndaOpen}

          lead={ndaLead}

          onClose={closeNda}

        />

      </>

    );

  }



  /\*

   \* =========================================================

   \* MAIN CRM

   \* =========================================================

   \*/



  return (

    <>

      <main className="min-h-screen bg-[#f4f6f8] text-gray-900">

        {/\* TOP HEADER \*/}

        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">

          <div className="max-w-[1600px] mx-auto px-5 lg:px-8">

            <div className="min-h-[78px] flex items-center justify-between gap-5">

              <div>

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-gray-950 text-white flex items-center justify-center font-black text-xs">

                    TC

                  </div>



                  <div>

                    <h1 className="text-xl lg:text-2xl font-bold tracking-tight">

                      Leads

                    </h1>



                    <p className="text-sm text-gray-500 mt-0.5 hidden sm:block">

                      Manage website enquiries, projects and clients

                    </p>

                  </div>

                </div>

              </div>



              <div className="flex items-center gap-2">

                <button

                  type="button"

                  onClick={

                    openStandaloneNda

                  }

                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1D4ED8] transition shadow-sm"

                >

                  ✦ Create NDA

                </button>



                <button

                  type="button"

                  onClick={loadLeads}

                  disabled={loading}

                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-950 text-white text-sm font-semibold hover:bg-gray-800 disabled:opacity-50 transition"

                >

                  ↻

                  <span className="hidden sm:inline">

                    {loading

                      ? "Refreshing"

                      : "Refresh"}

                  </span>

                </button>

              </div>

            </div>

          </div>

        </header>



        <div className="max-w-[1600px] mx-auto px-5 lg:px-8 py-7">

          {error && (

            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">

              {error}

            </div>

          )}



          {/\* KPI \*/}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-7">

            <StatCard

              title="Total Leads"

              value={totalLeads}

              description="All enquiries"

              icon="◉"

              accent="dark"

            />



            <StatCard

              title="Website Projects"

              value={

                websiteLeads.length

              }

              description="Questionnaire submissions"

              icon="⌘"

              accent="blue"

            />



            <StatCard

              title="Contact Enquiries"

              value={

                contactLeads.length

              }

              description="Contact form submissions"

              icon="✉"

              accent="green"

            />



            <StatCard

              title="Latest Lead"

              value={

                totalLeads

                  ? formatRelative(

                      unifiedLatest(

                        websiteLeads,

                        contactLeads

                      )

                    )

                  : "—"

              }

              description="Most recent submission"

              icon="◷"

              accent="purple"

            />

          </div>



          {/\* CONTROLS \*/}

          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm mb-6">

            <div className="p-3">

              <div className="flex flex-col xl:flex-row xl:items-center gap-3">

                {/\* SEARCH \*/}

                <div className="relative flex-1">

                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">

                    ⌕

                  </span>



                  <input

                    type="text"

                    value={search}

                    onChange={(event) =>

                      setSearch(

                        event.target.value

                      )

                    }

                    placeholder="Search by name, email, company, service, industry..."

                    className="w-full h-12 pl-11 pr-4 rounded-xl bg-gray-50 border border-gray-200 text-sm outline-none focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition"

                  />

                </div>



                {/\* TABLE SELECTOR \*/}

                <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1 overflow-x-auto">

                  <FilterButton

                    active={

                      leadType === "all"

                    }

                    onClick={() =>

                      setLeadType("all")

                    }

                  >

                    All Leads

                    <span>

                      {totalLeads}

                    </span>

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

                    Website Questionnaire

                    <span>

                      {

                        websiteLeads.length

                      }

                    </span>

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

                    Contact Form

                    <span>

                      {

                        contactLeads.length

                      }

                    </span>

                  </FilterButton>

                </div>



                {/\* SORT \*/}

                <select

                  value={sortOrder}

                  onChange={(event) =>

                    setSortOrder(

                      event.target

                        .value as SortOrder

                    )

                  }

                  className="h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700 outline-none focus:border-gray-400"

                >

                  <option value="newest">

                    Newest first

                  </option>



                  <option value="oldest">

                    Oldest first

                  </option>

                </select>

              </div>

            </div>



            {/\* CURRENT TABLE INDICATOR \*/}

            <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between gap-4">

              <div className="flex items-center gap-2">

                <span className="w-2 h-2 rounded-full bg-blue-600" />



                <span className="text-xs font-semibold text-gray-600">

                  {leadType === "all"

                    ? "All Leads"

                    : leadType ===

                      "website"

                    ? "Website Questionnaire"

                    : "Contact Form"}

                </span>

              </div>



              <span className="text-xs text-gray-400">

                {leadType === "all"

                  ? unifiedLeads.length

                  : leadType ===

                    "website"

                  ? filteredWebsiteLeads.length

                  : filteredContactLeads.length}{" "}

                records

              </span>

            </div>

          </div>



          {/\* LOADING \*/}

          {loading && (

            <div className="bg-white border border-gray-200 rounded-2xl p-16 text-center">

              <div className="w-10 h-10 rounded-full border-2 border-gray-200 border-t-gray-900 animate-spin mx-auto mb-4" />



              <p className="text-sm text-gray-500">

                Loading leads...

              </p>

            </div>

          )}



          {/\* ALL TABLE \*/}

          {!loading &&

            leadType === "all" && (

              <UnifiedLeadTable

                leads={unifiedLeads}

                onView={

                  openUnifiedLead

                }

                onNda={

                  openNdaForLead

                }

              />

            )}



          {/\* WEBSITE TABLE \*/}

          {!loading &&

            leadType === "website" && (

              <WebsiteLeadTable

                leads={

                  filteredWebsiteLeads

                }

                onView={(lead) =>

                  setSelectedWebsiteLead(

                    lead

                  )

                }

                onNda={

                  openNdaForLead

                }

              />

            )}



          {/\* CONTACT TABLE \*/}

          {!loading &&

            leadType === "contact" && (

              <ContactLeadTable

                leads={

                  filteredContactLeads

                }

                onView={(lead) =>

                  setSelectedContactLead(

                    lead

                  )

                }

              />

            )}

        </div>

      </main>



      <NdaModal

        open={ndaOpen}

        lead={ndaLead}

        onClose={closeNda}

      />

    </>

  );

}



/\*

 \* =========================================================

 \* UNIFIED TABLE

 \* =========================================================

 \*/



function UnifiedLeadTable({

  leads,

  onView,

  onNda,

}: {

  leads: UnifiedLead[];

  onView: (lead: UnifiedLead) => void;

  onNda: (lead: WebsiteLead) => void;

}) {

  return (

    <section>

      <TableHeader

        title="All Leads"

        subtitle="Website questionnaires and contact form enquiries"

        count={leads.length}

      />



      {leads.length === 0 ? (

        <EmptyState text="No leads found." />

      ) : (

        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">

          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              <thead className="bg-[#fafbfc] border-b border-gray-200">

                <tr>

                  <th className="th">

                    Lead

                  </th>



                  <th className="th">

                    Company

                  </th>



                  <th className="th">

                    Type

                  </th>



                  <th className="th">

                    Service / Industry

                  </th>



                  <th className="th">

                    Received

                  </th>



                  <th className="th text-right">

                    Actions

                  </th>

                </tr>

              </thead>



              <tbody className="divide-y divide-gray-100">

                {leads.map((lead) => (

                  <tr

                    key={`${lead.type}-${lead.id}`}

                    className="hover:bg-gray-50 transition"

                  >

                    <td className="px-5 py-4">

                      <div className="flex items-center gap-3">

                        <Avatar

                          name={lead.name}

                        />



                        <div className="min-w-0">

                          <div className="font-semibold text-gray-900">

                            {lead.name}

                          </div>



                          <div className="text-xs text-gray-500 mt-1 truncate max-w-[240px]">

                            {lead.email ||

                              "No email"}

                          </div>

                        </div>

                      </div>

                    </td>



                    <td className="px-5 py-4">

                      <div className="font-medium text-gray-800">

                        {lead.company}

                      </div>



                      <div className="text-xs text-gray-400 mt-1 truncate max-w-[200px]">

                        {lead.secondary}

                      </div>

                    </td>



                    <td className="px-5 py-4">

                      <TypeBadge

                        type={lead.type}

                      />

                    </td>



                    <td className="px-5 py-4">

                      <span className="inline-flex px-2.5 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium">

                        {lead.category}

                      </span>

                    </td>



                    <td className="px-5 py-4 text-gray-500 whitespace-nowrap">

                      {formatShortDate(

                        lead.created_at

                      )}

                    </td>



                    <td className="px-5 py-4">

                      <div className="flex items-center justify-end gap-2">

                        <button

                          type="button"

                          onClick={() =>

                            onView(lead)

                          }

                          className="px-3 py-2 rounded-lg bg-gray-950 text-white text-xs font-semibold hover:bg-gray-800 transition"

                        >

                          View

                        </button>



                        {lead.type ===

                          "website" &&

                          lead.websiteLead && (

                            <>

                              <button

                                type="button"

                                onClick={() =>

                                  onNda(

                                    lead.websiteLead!

                                  )

                                }

                                className="px-3 py-2 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-semibold hover:bg-indigo-100 transition"

                              >

                                NDA

                              </button>



                              <a

                                href={`/admin/leads/${lead.id}/pdf`}

                                className="px-3 py-2 rounded-lg border border-gray-200 text-gray-600 text-xs font-semibold hover:bg-gray-50 transition"

                              >

                                PDF

                              </a>

                            </>

                          )}



                        {lead.email && (

                          <a

                            href={`mailto:${lead.email}`}

                            title="Email"

                            className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900"

                          >

                            ✉

                          </a>

                        )}

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      )}

    </section>

  );

}



/\*

 \* =========================================================

 \* WEBSITE TABLE

 \* =========================================================

 \*/



function WebsiteLeadTable({

  leads,

  onView,

  onNda,

}: {

  leads: WebsiteLead[];

  onView: (lead: WebsiteLead) => void;

  onNda: (lead: WebsiteLead) => void;

}) {

  return (

    <section>

      <TableHeader

        title="Website Questionnaire"

        subtitle="Website project requirements submitted by clients"

        count={leads.length}

      />



      {leads.length === 0 ? (

        <EmptyState text="No website questionnaire leads found." />

      ) : (

        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">

          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              <thead className="bg-[#fafbfc] border-b border-gray-200">

                <tr>

                  <th className="th">

                    Client

                  </th>



                  <th className="th">

                    Business

                  </th>



                  <th className="th">

                    Industry

                  </th>



                  <th className="th">

                    Received

                  </th>



                  <th className="th text-right">

                    Actions

                  </th>

                </tr>

              </thead>



              <tbody className="divide-y divide-gray-100">

                {leads.map((lead) => (

                  <tr

                    key={lead.id}

                    className="hover:bg-gray-50 transition"

                  >

                    <td className="px-5 py-4">

                      <div className="flex items-center gap-3">

                        <Avatar

                          name={

                            lead.client_name

                          }

                        />



                        <div className="min-w-0">

                          <div className="font-semibold text-gray-900">

                            {lead.client_name ||

                              "Unknown Client"}

                          </div>



                          <div className="text-xs text-gray-500 mt-1 truncate max-w-[230px]">

                            {lead.email ||

                              "No email"}

                          </div>

                        </div>

                      </div>

                    </td>



                    <td className="px-5 py-4">

                      <div className="font-medium text-gray-800">

                        {lead.business_name ||

                          "—"}

                      </div>



                      {lead.business_slogan && (

                        <div className="text-xs text-gray-400 mt-1 truncate max-w-[200px]">

                          {

                            lead.business_slogan

                          }

                        </div>

                      )}

                    </td>



                    <td className="px-5 py-4">

                      <span className="inline-flex px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-medium">

                        {lead.industry ||

                          "Not specified"}

                      </span>

                    </td>



                    <td className="px-5 py-4 text-gray-500 whitespace-nowrap">

                      {formatShortDate(

                        lead.created_at

                      )}

                    </td>



                    <td className="px-5 py-4">

                      <div className="flex items-center justify-end gap-2">

                        <button

                          type="button"

                          onClick={() =>

                            onView(lead)

                          }

                          className="px-3 py-2 rounded-lg bg-gray-950 text-white text-xs font-semibold hover:bg-gray-800 transition"

                        >

                          View

                        </button>



                        <button

                          type="button"

                          onClick={() =>

                            onNda(lead)

                          }

                          className="px-3 py-2 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-semibold hover:bg-indigo-100 transition"

                        >

                          NDA

                        </button>



                        <a

                          href={`/admin/leads/${lead.id}/pdf`}

                          className="px-3 py-2 rounded-lg border border-gray-200 text-gray-600 text-xs font-semibold hover:bg-gray-50 transition"

                        >

                          PDF

                        </a>



                        {lead.email && (

                          <a

                            href={`mailto:${lead.email}`}

                            className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900"

                            title="Email client"

                          >

                            ✉

                          </a>

                        )}

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      )}

    </section>

  );

}



/\*

 \* =========================================================

 \* CONTACT TABLE

 \* =========================================================

 \*/



function ContactLeadTable({

  leads,

  onView,

}: {

  leads: ContactLead[];

  onView: (lead: ContactLead) => void;

}) {

  return (

    <section>

      <TableHeader

        title="Contact Form"

        subtitle="General website enquiries and service requests"

        count={leads.length}

      />



      {leads.length === 0 ? (

        <EmptyState text="No contact form leads found." />

      ) : (

        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">

          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              <thead className="bg-[#fafbfc] border-b border-gray-200">

                <tr>

                  <th className="th">

                    Contact

                  </th>



                  <th className="th">

                    Company

                  </th>



                  <th className="th">

                    Service

                  </th>



                  <th className="th">

                    Budget

                  </th>



                  <th className="th">

                    Received

                  </th>



                  <th className="th text-right">

                    Action

                  </th>

                </tr>

              </thead>



              <tbody className="divide-y divide-gray-100">

                {leads.map((lead) => (

                  <tr

                    key={lead.id}

                    className="hover:bg-gray-50 transition"

                  >

                    <td className="px-5 py-4">

                      <div className="flex items-center gap-3">

                        <Avatar

                          name={lead.name}

                        />



                        <div>

                          <div className="font-semibold text-gray-900">

                            {lead.name ||

                              "Unknown"}

                          </div>



                          <div className="text-xs text-gray-500 mt-1">

                            {lead.email ||

                              "No email"}

                          </div>

                        </div>

                      </div>

                    </td>



                    <td className="px-5 py-4 text-gray-700">

                      {lead.company ||

                        "—"}

                    </td>



                    <td className="px-5 py-4">

                      <span className="inline-flex px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium">

                        {lead.service ||

                          "General"}

                      </span>

                    </td>



                    <td className="px-5 py-4 text-gray-700">

                      {lead.budget ||

                        "—"}

                    </td>



                    <td className="px-5 py-4 text-gray-500 whitespace-nowrap">

                      {formatShortDate(

                        lead.created_at

                      )}

                    </td>



                    <td className="px-5 py-4">

                      <div className="flex items-center justify-end gap-2">

                        <button

                          type="button"

                          onClick={() =>

                            onView(lead)

                          }

                          className="px-3 py-2 rounded-lg bg-gray-950 text-white text-xs font-semibold hover:bg-gray-800 transition"

                        >

                          View

                        </button>



                        {lead.email && (

                          <a

                            href={`mailto:${lead.email}`}

                            className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900"

                            title="Email"

                          >

                            ✉

                          </a>

                        )}

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      )}

    </section>

  );

}



/\*

 \* =========================================================

 \* TABLE HEADER

 \* =========================================================

 \*/



function TableHeader({

  title,

  subtitle,

  count,

}: {

  title: string;

  subtitle: string;

  count: number;

}) {

  return (

    <div className="flex items-end justify-between gap-4 mb-4">

      <div>

        <div className="flex items-center gap-2">

          <h2 className="text-lg font-bold text-gray-900">

            {title}

          </h2>



          <span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 text-[11px] font-bold">

            {count}

          </span>

        </div>



        <p className="text-sm text-gray-500 mt-1">

          {subtitle}

        </p>

      </div>

    </div>

  );

}



/\*

 \* =========================================================

 \* FILTER BUTTON

 \* =========================================================

 \*/



function FilterButton({

  active,

  onClick,

  children,

}: {

  active: boolean;

  onClick: () => void;

  children: ReactNode;

}) {

  return (

    <button

      type="button"

      onClick={onClick}

      className={`px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition flex items-center gap-2 whitespace-nowrap ${

        active

          ? "bg-white text-gray-950 shadow-sm"

          : "text-gray-500 hover:text-gray-900"

      }`}

    >

      {children}

    </button>

  );

}



/\*

 \* =========================================================

 \* TYPE BADGE

 \* =========================================================

 \*/



function TypeBadge({

  type,

}: {

  type: "website" | "contact";

}) {

  if (type === "website") {

    return (

      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold">

        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />

        Questionnaire

      </span>

    );

  }



  return (

    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold">

      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />

      Contact

    </span>

  );

}



/\*

 \* =========================================================

 \* STAT CARD

 \* =========================================================

 \*/



function StatCard({

  title,

  value,

  description,

  icon,

  accent,

}: {

  title: string;

  value: number | string;

  description: string;

  icon: string;

  accent:

    | "dark"

    | "blue"

    | "green"

    | "purple";

}) {

  const styles = {

    dark: "bg-gray-100 text-gray-900",

    blue: "bg-blue-50 text-blue-600",

    green:

      "bg-emerald-50 text-emerald-600",

    purple:

      "bg-indigo-50 text-indigo-600",

  };



  return (

    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-400">

            {title}

          </p>



          <p className="text-3xl font-bold tracking-tight text-gray-950 mt-3">

            {value}

          </p>



          <p className="text-xs text-gray-500 mt-1.5">

            {description}

          </p>

        </div>



        <div

          className={`w-10 h-10 rounded-xl flex items-center justify-center font-semibold ${styles[accent]}`}

        >

          {icon}

        </div>

      </div>

    </div>

  );

}



/\*

 \* =========================================================

 \* INFO SECTION

 \* =========================================================

 \*/



function InfoSection({

  number,

  title,

  subtitle,

  children,

}: {

  number: string;

  title: string;

  subtitle: string;

  children: ReactNode;

}) {

  return (

    <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">

      <div className="px-6 py-5 border-b border-gray-100 flex items-center gap-4">

        <div className="w-9 h-9 rounded-xl bg-gray-950 text-white flex items-center justify-center text-xs font-bold">

          {number}

        </div>



        <div>

          <h2 className="font-bold text-gray-900">

            {title}

          </h2>



          <p className="text-xs text-gray-500 mt-0.5">

            {subtitle}

          </p>

        </div>

      </div>



      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">

        {children}

      </div>

    </section>

  );

}



/\*

 \* =========================================================

 \* INFO ITEM

 \* =========================================================

 \*/



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

        wide ? "md:col-span-2" : ""

      }

    >

      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-2">

        {label}

      </p>



      {link && value ? (

        <a

          href={value}

          target="\_blank"

          rel="noopener noreferrer"

          className="text-sm text-blue-600 hover:underline break-all"

        >

          {value}

        </a>

      ) : (

        <div className="text-sm text-gray-800 whitespace-pre-wrap break-words leading-6">

          {value ||

            "Not provided"}

        </div>

      )}

    </div>

  );

}



/\*

 \* =========================================================

 \* SUMMARY CARD

 \* =========================================================

 \*/



function SummaryCard({

  label,

  value,

  icon,

}: {

  label: string;

  value: string;

  icon: string;

}) {

  return (

    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">

      <div className="flex items-start gap-4">

        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700">

          {icon}

        </div>



        <div className="min-w-0">

          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400">

            {label}

          </p>



          <p className="text-sm font-semibold text-gray-900 mt-1.5 truncate">

            {value}

          </p>

        </div>

      </div>

    </div>

  );

}



/\*

 \* =========================================================

 \* AVATAR

 \* =========================================================

 \*/



function Avatar({

  name,

}: {

  name?: string;

}) {

  const initials =

    (name || "L")

      .split(" ")

      .filter(Boolean)

      .slice(0, 2)

      .map((part) =>

        part

          .charAt(0)

          .toUpperCase()

      )

      .join("") || "L";



  return (

    <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-700 shrink-0">

      {initials}

    </div>

  );

}



/\*

 \* =========================================================

 \* EMPTY STATE

 \* =========================================================

 \*/



function EmptyState({

  text,

}: {

  text: string;

}) {

  return (

    <div className="bg-white border border-gray-200 rounded-2xl p-16 text-center shadow-sm">

      <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4 text-gray-400 text-xl">

        ◌

      </div>



      <p className="text-sm font-medium text-gray-500">

        {text}

      </p>

    </div>

  );

}



/\*

 \* =========================================================

 \* SHORT DATE

 \* =========================================================

 \*/



function formatShortDate(

  date?: string

) {

  if (!date) return "—";



  return new Date(

    date

  ).toLocaleDateString([], {

    month: "short",

    day: "numeric",

    year: "numeric",

  });

}



/\*

 \* =========================================================

 \* LATEST LEAD

 \* =========================================================

 \*/



function unifiedLatest(

  website: WebsiteLead[],

  contact: ContactLead[]

) {

  const all = [

    ...website,

    ...contact,

  ];



  if (!all.length) {

    return undefined;

  }



  return all.sort(

    (a, b) =>

      new Date(

        b.created_at

      ).getTime() -

      new Date(

        a.created_at

      ).getTime()

  )[0]?.created_at;

}



/\*

 \* =========================================================

 \* RELATIVE DATE

 \* =========================================================

 \*/



function formatRelative(

  date?: string

) {

  if (!date) return "—";



  const now = Date.now();



  const time =

    new Date(date).getTime();



  const diff =

    Math.max(0, now - time);



  const minutes =

    Math.floor(

      diff / 60000

    );



  if (minutes < 1) {

    return "Just now";

  }



  if (minutes < 60) {

    return `${minutes}m ago`;

  }



  const hours =

    Math.floor(

      minutes / 60

    );



  if (hours < 24) {

    return `${hours}h ago`;

  }



  const days =

    Math.floor(

      hours / 24

    );



  if (days < 30) {

    return `${days}d ago`;

  }



  return `${Math.floor(

    days / 30

  )}mo ago`;

}



/\*

 \* =========================================================

 \* GLOBAL TABLE HEADER STYLE

 \* =========================================================

 \*/



const th =

  "text-left px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-gray-400";