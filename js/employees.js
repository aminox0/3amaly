function formatDate(dateString) {
  return new Date(dateString).toLocaleString();
}

function displayReports() {
  const reportsDiv = document.getElementById('reports');
  const reports = JSON.parse(localStorage.getItem('reports') || '[]');
  
  if (reports.length === 0) {
    reportsDiv.innerHTML = '<p>No reports submitted yet.</p>';
    return;
  }

  reportsDiv.innerHTML = reports
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .map(report => `
      <div class="report-card">
        <h2>${report.name}</h2>
        <p><strong>Tasks Completed:</strong> ${report.tasks}</p>
        <p><strong>Project Link:</strong> <a href="${report.projectLink}" target="_blank">Download Project</a></p>
        <p><strong>Time Spent:</strong> ${report.timeSpent} hours</p>
        <p><strong>Submitted:</strong> ${formatDate(report.timestamp)}</p>
      </div>
    `)
    .join('');
}

// Initial display
displayReports();

// Update display every minute to catch new submissions
setInterval(displayReports, 60000);