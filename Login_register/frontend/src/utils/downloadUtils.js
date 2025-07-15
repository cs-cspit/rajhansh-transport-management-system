import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// ✅ Export to Excel (with auto column width)
export const exportToExcel = (data, filename = 'report') => {
  if (!data || data.length === 0) {
    alert("❗ No data available to export.");
    return;
  }

  // 🔄 Convert nested objects to readable values
  const flatData = data.map((row, index) => {
    const newRow = { '#': index + 1 };
    for (const key in row) {
      const value = row[key];
      if (typeof value === 'object' && value !== null) {
        if (value.truckNumber) {
          newRow[key] = value.truckNumber;
        } else {
          newRow[key] = JSON.stringify(value);
        }
      } else {
        newRow[key] = value;
      }
    }
    return newRow;
  });

  const worksheet = XLSX.utils.json_to_sheet(flatData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');

  // 📏 Auto column width
  const colWidths = Object.keys(flatData[0]).map((key) => ({
    wch: Math.max(...flatData.map(row => (row[key] || '').toString().length), key.length) + 2,
  }));
  worksheet['!cols'] = colWidths;

  XLSX.writeFile(workbook, `${filename}.xlsx`);
};

// ✅ Export to PDF (formatted table)
export const exportToPDF = (data, title = 'Report', filename = 'report') => {
  if (!data || data.length === 0) {
    alert("❗ No data available to export.");
    return;
  }

  const doc = new jsPDF();
  doc.setFontSize(14);
  doc.text(title, 14, 15);

  // 🔄 Flatten data
  const flatData = data.map((row, index) => {
    const newRow = { '#': index + 1 };
    for (const key in row) {
      const value = row[key];
      if (typeof value === 'object' && value !== null) {
        if (value.truckNumber) {
          newRow[key] = value.truckNumber;
        } else {
          newRow[key] = JSON.stringify(value);
        }
      } else {
        newRow[key] = value;
      }
    }
    return newRow;
  });

  const headers = [Object.keys(flatData[0])];
  const body = flatData.map(obj => Object.values(obj));

  doc.autoTable({
    head: headers,
    body,
    startY: 20,
    styles: {
      fontSize: 8,
      cellPadding: 2,
      overflow: 'linebreak',
    },
    headStyles: {
      fillColor: [22, 160, 133], // Teal header
      textColor: 255,
      fontStyle: 'bold',
    },
    theme: 'grid',
  });

  doc.save(`${filename}.pdf`);
};
