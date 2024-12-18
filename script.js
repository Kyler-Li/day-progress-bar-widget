function updateProgress() {
  const now = new Date();
  
  // Calculate the total minutes passed today
  const totalMinutesToday = now.getHours() * 60 + now.getMinutes();
  
  // Calculate the percentage of the day that has passed
  const percentage = (totalMinutesToday / 1440) * 100; // 1440 = total minutes in a day
  
  // Update time display
  const timeElement = document.getElementById("time");
  const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  timeElement.textContent = formattedTime;
  
  // Update progress bar width
  const progressFill = document.getElementById("progress-fill");
  progressFill.style.width = `${percentage}%`;
  
  // Update progress percentage display
  const progressPercentage = document.getElementById("progress-percentage");
  progressPercentage.textContent = `${percentage.toFixed(2)}% of the day completed`;
}

// Update progress every second
setInterval(updateProgress, 1000);
updateProgress(); // Initial call to set the progress immediately
