import * as XLSX from 'xlsx';
export class ExcelReader {

static readExcelFile<T = unknown>(filePath: string, sheetName: string): T[][] {
        const workbook = XLSX.readFile(filePath);
        const worksheet = workbook.Sheets[sheetName];
        const data: T[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        console.log(data);

               return data;
    }
        

}