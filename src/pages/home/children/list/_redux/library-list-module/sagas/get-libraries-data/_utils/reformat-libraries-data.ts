import {LibrariesDataItemServerType, LibrariesDataType} from "../../../types";
type ParamsType = {
  data: Array<LibrariesDataItemServerType>;
};

export const reformatLibrariesData = ({
  data,
}: ParamsType): Array<LibrariesDataType> =>
  data.map(
    ({
      "individual_subscribers_(information_services),_units": individualSubscribers,
      buildings_disrepair,
      buildings_management,
      buildings_repair,
      dropped_copies,
      electronic_catalogue_volume,
      employees_staff,
      "funds_main_activity,_thousand_rubles": fundsMainActivity,
      "number_of_personal_computers_in_libraries,_units": numberOfPersonalComputersInLibraries,
      out_of_instances,
      copies_electronic,
      copies_issued,
      issued_electronic,
      copies_issued_children,
      visits_sites,
      staff_higheeducated,
      staff_vocational,
      funds_budget,
      funds_used,
      funds_staff,
      funds_acquisition,
      libraries_computers,
      internet_catalogs,
      internet_catalogue_volume,
      users_children,
      received_copies,
      received_electronic,
      funds_entrepreneurial,
      digital_catalogs,
      fullname,
      kopuk,
      territory,
      address,
      formname,
      period,
      order,
      libraries,
      internet,
      site,
      computers,
      users,
      visits,
      copies,
      subscribers,
      employees,
      funds,
    }) => ({
      buildingsDisrepair: buildings_disrepair,
      buildingsManagement: buildings_management,
      buildingsRepair: buildings_repair,
      copies_electronic: copies_electronic,
      copies_issued: copies_issued,
      copies_issued_children: copies_issued_children,
      digitalCatalogs: digital_catalogs,
      droppedCopies: dropped_copies,
      electronicCatalogueVolume: electronic_catalogue_volume,
      employeesStaff: employees_staff,
      individualSubscribers,
      fundsMainActivity,
      numberOfPersonalComputersInLibraries,
      outOfInstances: out_of_instances,
      copiesElectronic: copies_electronic,
      copiesIssued: copies_issued,
      issuedElectronic: issued_electronic,
      copiesIssuedChildren: copies_issued_children,
      visitsSites: visits_sites,
      staffHigheeducated: staff_higheeducated,
      staffVocational: staff_vocational,
      fundsBudget: funds_budget,
      fundsUsed: funds_used,
      fundsStaff: funds_staff,
      fundsAcquisition: funds_acquisition,
      librariesComputers: libraries_computers,
      internetCatalogs: internet_catalogs,
      internetCatalogueVolume: internet_catalogue_volume,
      usersChildren: users_children,
      receivedCopies: received_copies,
      receivedElectronic: received_electronic,
      fundsEntrepreneurial: funds_entrepreneurial,
      fullname,
      kopuk,
      territory,
      address,
      formname,
      period,
      order,
      libraries,
      internet,
      site,
      computers,
      users,
      visits,
      copies,
      subscribers,
      employees,
      funds,
    })
  );
