
       function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}
updateTime();
setInterval(updateTime, 1000);

        
        
        document.addEventListener('DOMContentLoaded', function() {
            const avatarElement = document.querySelector('[data-testid="test-user-avatar"]');
            
           
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.style.display = 'none';
            
         
            avatarElement.style.cursor = 'pointer';
            avatarElement.addEventListener('click', function() {
                fileInput.click();
            });
            
            
            fileInput.addEventListener('change', function(e) {
                if (e.target.files && e.target.files[0]) {
                    const reader = new FileReader();
                    
                    reader.onload = function(event) {
                        avatarElement.src = event.target.result;
                    };
                    
                    reader.readAsDataURL(e.target.files[0]);
                }
            });
            
            
            document.body.appendChild(fileInput);
        });