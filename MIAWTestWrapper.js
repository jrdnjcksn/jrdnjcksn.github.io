var chatWrapper = {
    'agentVisible': false,
    'chatReady'	:false,
    'channel' : 'test2',
    'channelUrl' : 'https://jordanjackson-cdo2--preview.sandbox.my.site.com/ESWExampleExternalESD1753885862476',
    'wrapperInit' : false,
    'isMil' : '',
    'chatbotVisible': false,
    'conversationStarted': false,
    'prechatValues' : {},
    'chatbotPayload': {},
    'businessHours': false,
   // 'timeoutInterval': 120000, // two minutes = 120000
    'timeoutInterval': 30000, //30 second timeout
    'EVENT_INVOKE_AGENT': 'launchagent',
    'EVENT_INVOKE_CHATBOT': 'launchchatbot',
    'EVENT_CLOSE_CHATBOT': 'closechatbot',
    'EVENT_AGENT_AVAILABLE': 'isagentavailable',
};

chatWrapper.initEmbeddedMessaging = function (lang) {
       
		if (lang == 'English'){
			lang = 'en-US';
		}else{
			lang = 'es';
		}
		try {
			console.log('Setting language preference to: ' + lang);
			embeddedservice_bootstrap.settings.language = lang; // For example, enter 'en' or 'en-US'

			embeddedservice_bootstrap.init(
				'00DWC000000EenB',
				'Example_External_ESD',
				'https://jordanjackson-cdo2--preview.sandbox.my.site.com/ESWExampleExternalESD1753885862476',
				{
					scrt2URL: 'https://jordanjackson-cdo2--preview.sandbox.my.salesforce-scrt.com'
				}
			);
		} catch (err) {
			console.error('Error loading Embedded Messaging: ', err);
		}
	};


