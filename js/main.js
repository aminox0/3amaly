function saveReport(report) {
  const reports = JSON.parse(localStorage.getItem('reports') || '[]');
  reports.push({
    ...report,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('reports', JSON.stringify(reports));
}

document.getElementById('reportForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const report = {
    name: formData.get('name'),
    tasks: formData.get('tasks'),
    projectLink: formData.get('projectLink'),
    timeSpent: parseFloat(formData.get('timeSpent'))
  };

  saveReport(report);
  e.target.reset();
  
  // Show success message
  alert('Report submitted successfully!');
});