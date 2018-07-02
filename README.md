# festival-data-migration

Converts Festival Party Rentals current ERP database from Tandisinc ERP (Wayne ) to Pareto ERP Template.

Tandisinc data was givento us in a Microsoft Access database, on ```./assets/tandis.accdb```. The tables were converted to xml and csv. This app converts this data to the shape and format Pareto requested.

The output file with Festival data converted as Pareto requests can be find on ```./dist/festival data.xlsx``` **Still in development**

## Running
1) Clone the repository
2) Run ```yarn start```
3) The data will be migrated to ```./dist/festival data.xlsx```

###Open only
To convert only open quotes, contracts, invoices and deposits run with parameter -o, --open-only
```yarn start -o```
or
```yarn start --open-only```

## Testing
1) Run ```yarn test```
