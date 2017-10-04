function toggle() {
  document.getElementById("toggle-btn").addEventListener('click', function() {
    const directions = document.getElementById('directions');
    let toggleBtn = document.getElementById('toggle-btn');
    if (directions.style.display === 'none') {
      directions.style.display = 'block';
      toggleBtn.value = 'Hide Directions';
    } else {
      directions.style.display = 'none';
      toggleBtn.value = "Show Directions";
    }
  });
}

export default toggle;
