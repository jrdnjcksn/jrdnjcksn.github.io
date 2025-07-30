var chatWrapper = {
    'agentVisible': false,
    'chatReady'	:false,
    'channel' : 'test2',
    'channelUrl' : 'https://jordanjackson-cdo2--preview.sandbox.my.site.com/ESWDemoESD4701962801744211202133',
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


// window.addEventListener("onEmbeddedMessagingButtonCreated", (event) => {
//     console.log("Received the Button Created event…");
//     console.log("Event detail: ", event.detail);
//     let evtResponse = JSON.parse(JSON.stringify(event.detail));
//     console.log('flag ' + evtResponse.buttonVisibility);
//     let agentVisible = (evtResponse.buttonVisibility === "Show")? true : false;
    // embeddedservice_bootstrap.utilAPI.hideChatButton();
    // //if (chatWrapper.chatReady){
    // //    launchChat();
    // //    chatWrapper.chatReady = false;
    // //}
	// console.log('launching');
    //     embeddedservice_bootstrap.utilAPI.launchChat()
    //         .then(() => {
    //             // Success handler used to perform actions
    //             // when the chat client launches successfully.
    //             // For example, create a method that disables the launch chat button.
    //             console.log('in launched');
    //             //disableLaunchChatButton();
    //         }).catch(() => {
    //             // Error handler used to perform actions
    //             // if the chat client fails to launch.
    //             // For example, create a method that hides the launch chat button.
    //             // hideLaunchChatButton();
    //             console.log('failed to launch');
    //         }).finally(() => {
    //             // Finally handler used to perform any clean-up actions
    //             // regardless of whether the chat client launches successfully or not.
    //             // For example, create a method that logs the user’s attempt to chat.
    //             //logEndUserAttemptToChat();
    //             console.log('finally done');
    //         });
    // Do something...
  //});




chatWrapper.initEmbeddedMessaging = function (lang) {
       
		if (lang == 'English'){
			lang = 'en-US';
		}else{
			lang = 'es';
		}
		try {
			embeddedservice_bootstrap.settings.language = 'es'; // For example, enter 'en' or 'en-US'

			embeddedservice_bootstrap.init(
				'00DWC000000EenB',
				'Demo_ESD_470196280',
				'https://jordanjackson-cdo2--preview.sandbox.my.site.com/ESWDemoESD4701962801744211202133',
				{
					scrt2URL: 'https://jordanjackson-cdo2--preview.sandbox.my.salesforce-scrt.com'
				}
			);
		} catch (err) {
			console.error('Error loading Embedded Messaging: ', err);
		}
	};


