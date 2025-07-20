import { useEffect } from 'react';

const JivoChat = () => {
  useEffect(() => {
    // Create the JivoChat widget
    const jivoScript = document.createElement('script');
    jivoScript.type = 'text/javascript';
    jivoScript.async = true;
    jivoScript.src = '//widget.jivosite.com/widget.js';
    
    // Add the widget configuration
    const jivoConfig = document.createElement('script');
    jivoConfig.type = 'text/javascript';
    jivoConfig.innerHTML = `
      (function(){ 
        var widget_id = '8QGTTHuJhp';
        var d=document;
        var w=window;
        function l(){
          var s = document.createElement('script'); 
          s.type = 'text/javascript'; 
          s.async = true; 
          s.src = '//code.jivosite.com/script/widget/'+widget_id; 
          var ss = document.getElementsByTagName('script')[0]; 
          ss.parentNode.insertBefore(s, ss);
        }
        if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}
      })();
    `;
    
    // Append scripts to document head
    document.head.appendChild(jivoConfig);
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