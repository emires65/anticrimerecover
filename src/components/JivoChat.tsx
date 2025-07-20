import { useEffect } from 'react';

const JivoChat = () => {
  useEffect(() => {
    // Create script element for JivoChat
    const script = document.createElement('script');
    script.src = 'https://app.jivosite.com/simulate_widget.html?code_host=code.jivosite.com&locale=en&site=evankatehudson-gmail.com-site&widget_id=8QGTTHuJhp';
    script.async = true;
    
    // Append to document head
    document.head.appendChild(script);
    
    // Cleanup function to remove script on component unmount
    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default JivoChat;