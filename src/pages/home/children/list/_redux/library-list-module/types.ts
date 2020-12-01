export type LibrariesDataItemServerType = {
  fullname: string;
  kopuk: string;
  territory: string;
  address: string;
  formname: string;
  period: string;
  "individual_subscribers_(information_services),_units": number;
  order: number;
  libraries: number;
  buildings_repair: number;
  buildings_disrepair: number;
  buildings_management: number;
  libraries_computers: number;
  internet: number;
  site: number;
  "number_of_personal_computers_in_libraries,_units": number;
  computers: number;
  digital_catalogs: number;
  internet_catalogs: number;
  electronic_catalogue_volume: number;
  internet_catalogue_volume: number;
  users: number;
  users_children: number;
  visits: number;
  received_copies: number;
  received_electronic: number;
  out_of_instances: number;
  dropped_copies: number;
  copies: number;
  copies_electronic: number;
  copies_issued: number;
  issued_electronic: number;
  copies_issued_children: number;
  subscribers: number;
  visits_sites: number;
  employees: number;
  employees_staff: number;
  staff_higheeducated: number;
  staff_vocational: number;
  funds: number;
  funds_budget: number;
  funds_entrepreneurial: number;
  "funds_main_activity,_thousand_rubles": number;
  funds_used: number;
  funds_staff: number;
  funds_acquisition: number;
};

export type LibrariesDataType = {
  fullname: string;
  kopuk: string;
  territory: string;
  address: string;
  formname: string;
  period: string;
  individualSubscribers: number;
  order: number;
  libraries: number;
  buildingsRepair: number;
  buildingsDisrepair: number;
  buildingsManagement: number;
  librariesComputers: number;
  internet: number;
  site: number;
  numberOfPersonalComputersInLibraries: number;
  computers: number;
  digitalCatalogs: number;
  internetCatalogs: number;
  electronicCatalogueVolume: number;
  internetCatalogueVolume: number;
  users: number;
  usersChildren: number;
  visits: number;
  receivedCopies: number;
  receivedElectronic: number;
  outOfInstances: number;
  droppedCopies: number;
  copies: number;
  copiesElectronic: number;
  copiesIssued: number;
  issuedElectronic: number;
  copiesIssuedChildren: number;
  subscribers: number;
  visitsSites: number;
  employees: number;
  employeesStaff: number;
  staffHigheeducated: number;
  staffVocational: number;
  funds: number;
  fundsBudget: number;
  fundsEntrepreneurial: number;
  fundsMainActivity: number;
  fundsUsed: number;
  fundsStaff: number;
  fundsAcquisition: number;
};

export type LibrariesListItemType = {
  territory: string;
  librariesCount: Number;
  order: number;
};

export type LibrarySortType = {
  destination: DestinationType;
  isTerritory: boolean;
};

export type LibrariesListStorageType = {
  libraries: Array<LibrariesDataType>;
  librariesList: Array<LibrariesListItemType>;
  sortByRegion: LibrarySortType;
  sortByLibrariesCount: LibrarySortType;
};

export type LibrariesListActionType = {
  type: string;
  payload?:
    | Array<LibrariesDataType>
    | Array<LibrariesListItemType>
    | LibrarySortType;
};

export enum DestinationType {
  ASC = "ASC",
  DESC = "DESC",
}
