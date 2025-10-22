
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

         document.addEventListener('DOMContentLoaded', function() {
      const form = document.getElementById('contact-form');
      const successMessage = document.getElementById('contact-success');

      form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

        // Full Name
        const name = document.getElementById('contact-name');
        if (!name.value.trim()) {
          document.getElementById('contact-error-name').textContent = 'Full name is required.';
          isValid = false;
        }

        // Email
        const email = document.getElementById('contact-email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
          document.getElementById('contact-error-email').textContent = 'Email is required.';
          isValid = false;
        } else if (!emailRegex.test(email.value)) {
          document.getElementById('contact-error-email').textContent = 'Please enter a valid email address.';
          isValid = false;
        }

        // Subject
        const subject = document.getElementById('contact-subject');
        if (!subject.value.trim()) {
          document.getElementById('contact-error-subject').textContent = 'Subject is required.';
          isValid = false;
        }

        // Message
        const message = document.getElementById('contact-message');
        if (!message.value.trim()) {
          document.getElementById('contact-error-message').textContent = 'Message is required.';
          isValid = false;
        } else if (message.value.trim().length < 10) {
          document.getElementById('contact-error-message').textContent = 'Message must be at least 10 characters long.';
          isValid = false;
        }

        if (isValid) {
          successMessage.style.display = 'block';
          form.reset();
          // Hide success after 5 seconds
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        }
      });
    });