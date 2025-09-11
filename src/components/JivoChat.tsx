import { useEffect } from 'react';

const JivoChat = () => {
  useEffect(() => {
    // Create the JivoChat widget
    const jivoScript = document.createElement('script');
    jivoScript.type = 'text/javascript';
    jivoScript.async = true;
    jivoScript.src = '//widget.jivosite.com/widget.js';
    
    // Add the widget script
    jivoScript.src = '//code.jivosite.com/widget/e8tTGaxiWC';
    
    // Append script to document head
    document.head.appendChild(jivoScript);
    
    // Cleanup function
    return () => {
      const existingJivoConfig = document.querySelector('script[src*="jivosite.com"]');
      const existingJivoScript = document.querySelector('script[src="//widget.jivosite.com/widget.js"]');
      if (existingJivoConfig) document.head.removeChild(existingJivoConfig);
      if (existingJivoScript) document.head.removeChild(existingJivoScript);
    };
  }, []);

  return null;
};

export default JivoChat;