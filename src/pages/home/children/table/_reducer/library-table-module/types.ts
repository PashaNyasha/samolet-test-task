export type LibrariesTableItemServerType = {
  fullname: string;
  kopuk: string;
  territory: string;
  address: string;
  formname: string;
  period: string;
  "individual_subscribers_(information_services),_units": string;
  order: number;
  libraries: number;
  buildings_repair: number;
  buildings_disrepair: number;
  buildings_management: number;
  libraries_computers: number;
  internet: number;
  site: number;
  number_of_personal_computers_in_libraries: number;
  computers: number;
  digital_catalogs: number;
  internet_catalogs: number;
  "electronic_catalogue_volume: 1822.6: number": number;
  internet_catalogue_volume: number;
  users: number;
  users_children: number;
  visits: string;
  received_copies: string;
  received_electronic: string;
  out_of_instances: string;
  dropped_copies: string;
  copies: string;
  copies_electronic: string;
  copies_issued: string;
  issued_electronic: string;
  copies_issued_children: string;
  subscribers: string;
  visits_sites: string;
  employees: string;
  employees_staff: string;
  staff_higheeducated: string;
  staff_vocational: string;
  funds: string;
  funds_budget: string;
  funds_entrepreneurial: string;
  "funds_main_activity,_thousand_rubles": string;
  funds_used: string;
  funds_staff: string;
  funds_acquisition: string;
};

export type LibrariesTableItemType = {
  territory: string;
  libraries: number;
};

export type LibrariesTableStorageType = {
  libraries: Array<LibrariesTableItemType>;
  isLoading: boolean;
};

export type LibrariesTableActionType = {
  type: string;
  payload?: Array<LibrariesTableItemType>;
};
