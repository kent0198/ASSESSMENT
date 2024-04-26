const axios = require('axios');
const xlsx = require('xlsx');

const url = 'https://go.microsoft.com/fwlink/?LinkID=521962';

function filterSalesGreaterThan50K(jsonData) {
  return jsonData.filter(obj => obj['  Sales '] > 50000);
}

axios.get(url, { responseType: 'arraybuffer' })
    .then(response => {
      
        const workbook = xlsx.read(response.data, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        
        const jsonData = xlsx.utils.sheet_to_json(sheet);
        console.log(jsonData)
        
        const filteredData = filterSalesGreaterThan50K(jsonData);
        console.log(filteredData)
        
        const newWorkbook = xlsx.utils.book_new();
    
        const newSheet = xlsx.utils.json_to_sheet(filteredData);
   
        xlsx.utils.book_append_sheet(newWorkbook, newSheet, 'Filtered Data');
      
        xlsx.writeFile(newWorkbook, 'filtered_data.xlsx');
        
        console.log('Filtered data saved to filtered_data.xlsx');
    })
    .catch(error => {
        console.error('Error fetching or processing file:', error);
    });
