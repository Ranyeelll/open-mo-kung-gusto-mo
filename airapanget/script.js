function toggleEnvelope() {
               const envelope = document.querySelector('.envelope');
               const message = document.querySelector('.message');

               // Toggle the envelope's open state
               envelope.classList.toggle('open');

               if (message.style.display === 'block') {
                              // Hide the message with fade-out
                              message.style.opacity = 0;
                              setTimeout(() => {
                                             message.style.display = 'none';
                              }, 500);
               } else {
                              // Show the message with fade-in
                              setTimeout(() => {
                                             message.style.display = 'block';
                                             setTimeout(() => {
                                                            message.style.opacity = 1;
                                             }, 50);
                              }, 500); // Delay message until envelope fully opens
               }
}
