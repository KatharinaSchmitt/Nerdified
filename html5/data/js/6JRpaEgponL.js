window.globalProvideData('slide', '{"title":"Ordne die Tränke nach ihrer Zubereitungsdauer\\rBeginne mit der längsten Dauer.","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":4,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide4","width":720,"height":540,"resume":true,"background":{"type":"swf","imagedata":{"assetId":0,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"6JRpaEgponL","variables":[{"kind":"variable","name":"6JRpaEgponL_65aPtQ0tZ1A_resume","type":"string","value":"","resume":false},{"kind":"variable","name":"6JRpaEgponL_65aPtQ0tZ1A_showing","type":"boolean","value":true,"resume":true}],"actionGroups":{"ReviewInt_5fKnLFmlj6L":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5fKnLFmlj6L.5ntqPPzVANI"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5fKnLFmlj6L.6LBwAGjDfPL"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5fKnLFmlj6L.60x7IqQsuLT"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6GpCqAwLrEm.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5fKnLFmlj6L_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5fKnLFmlj6L_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5fKnLFmlj6L","typea":"var","valueb":"5kuu4Gkl6F2","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00001100001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5kuu4Gkl6F2.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5fKnLFmlj6L"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5kuu4Gkl6F2.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5fKnLFmlj6L"}]}]}]},"ReviewIntCorrectIncorrect_5fKnLFmlj6L":{"kind":"actiongroup","actions":[{"kind":"set_review","objRef":{"type":"string","value":"5fKnLFmlj6L.5ntqPPzVANI"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"5fKnLFmlj6L.6LBwAGjDfPL"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"5fKnLFmlj6L.60x7IqQsuLT"},"enabled":{"type":"boolean","value":true}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5fKnLFmlj6L.5ntqPPzVANI_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5fKnLFmlj6L.6LBwAGjDfPL_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5fKnLFmlj6L.60x7IqQsuLT_ReviewShape"}}]},"AnsweredInt_5fKnLFmlj6L":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5fKnLFmlj6L"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100001"}]}]},"DisableChoices_5fKnLFmlj6L":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5fKnLFmlj6L.5ntqPPzVANI"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5fKnLFmlj6L.6LBwAGjDfPL"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5fKnLFmlj6L.60x7IqQsuLT"},"enabled":{"type":"boolean","value":false}}]},"5fKnLFmlj6L_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6GpCqAwLrEm.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5kuu4Gkl6F2.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5fKnLFmlj6L"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6GpCqAwLrEm.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6GpCqAwLrEm.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5fKnLFmlj6L"}]}]}]}]},"SetLayout_pxabnsnfns00001100001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100001"}]}]},"NavigationRestrictionNextSlide_6JRpaEgponL":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5eWrpu2nAgU"}}]},"NavigationRestrictionPreviousSlide_6JRpaEgponL":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00001100001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_66Q1QuLcTQy","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_66Q1QuLcTQy","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5fKnLFmlj6L","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5fKnLFmlj6L"}],"elseActions":[{"kind":"exe_actiongroup","id":"5fKnLFmlj6L_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5fKnLFmlj6L","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5fKnLFmlj6L","typea":"var","valueb":"5kuu4Gkl6F2","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5kuu4Gkl6F2"},"completed_slide_ref":{"type":"string","value":"_player.6l6FRnnXvnS.6ICdtPFwv1l"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5fKnLFmlj6L","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5fKnLFmlj6L","typea":"var","valueb":"5kuu4Gkl6F2","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5kuu4Gkl6F2"},"completed_slide_ref":{"type":"string","value":"_player.6l6FRnnXvnS.6ICdtPFwv1l"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6JRpaEgponL"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6JRpaEgponL"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5fKnLFmlj6L"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5fKnLFmlj6L.60x7IqQsuLT"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5fKnLFmlj6L.6LBwAGjDfPL"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5fKnLFmlj6L.5ntqPPzVANI"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6CMxpWbmxho"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5jtFyr6Vxgj"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6dFuW6DpB0m"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6GAX8QnMQRy"}}]}]},"objects":[{"kind":"scrollarea","contentwidth":255,"contentheight":135,"objects":[{"kind":"shufflegroup","objects":[{"kind":"droplist","shuffle":true,"reviewwidth":127,"reviewindex":2,"shapemaskId":"","xPos":0,"yPos":96,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":127.5,"rotateYPos":11.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"item_hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xADFFFF","alpha":100,"stop":0}]}},{"kind":"color","name":"button_hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xD5FFFF","alpha":100,"stop":0}]}},{"kind":"color","name":"review_text","fill":{"type":"linear","rotation":0,"colors":[{"kind":"color","rgb":"0x000000","alpha":100,"stop":0}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt2_60x7IqQsuLT","type":"vectortext","altText":"--Auswählen--","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":88,"bottom":21,"pngfb":false,"pr":{"l":"Lib","i":778}}},"itemlist":[{"kind":"item","itemdata":"choices.choice_5ntqPPzVANI","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5ntqPPzVANI_1466534675","type":"vectortext","altText":"Felix Felicis","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":155,"bottom":21,"pngfb":false,"pr":{"l":"Lib","i":779}}}},{"kind":"item","itemdata":"choices.choice_6LBwAGjDfPL","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6LBwAGjDfPL_858913170","type":"vectortext","altText":"Vielsaft-Trank","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":164,"bottom":21,"pngfb":false,"pr":{"l":"Lib","i":780}}}},{"kind":"item","itemdata":"choices.choice_60x7IqQsuLT","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_60x7IqQsuLT_220805782","type":"vectortext","altText":"Veritaserum","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":156,"bottom":21,"pngfb":false,"pr":{"l":"Lib","i":781}}}}]},"width":255,"height":23,"resume":true,"useHandCursor":true,"id":"60x7IqQsuLT"},{"kind":"droplist","shuffle":true,"reviewwidth":127,"reviewindex":1,"shapemaskId":"","xPos":0,"yPos":53,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":127.5,"rotateYPos":11.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"item_hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xADFFFF","alpha":100,"stop":0}]}},{"kind":"color","name":"button_hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xD5FFFF","alpha":100,"stop":0}]}},{"kind":"color","name":"review_text","fill":{"type":"linear","rotation":0,"colors":[{"kind":"color","rgb":"0x000000","alpha":100,"stop":0}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt2_60x7IqQsuLT","type":"vectortext","altText":"--Auswählen--","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":88,"bottom":21,"pngfb":false,"pr":{"l":"Lib","i":778}}},"itemlist":[{"kind":"item","itemdata":"choices.choice_5ntqPPzVANI","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5ntqPPzVANI_1466534675","type":"vectortext","altText":"Felix Felicis","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":155,"bottom":21,"pngfb":false,"pr":{"l":"Lib","i":779}}}},{"kind":"item","itemdata":"choices.choice_6LBwAGjDfPL","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6LBwAGjDfPL_858913170","type":"vectortext","altText":"Vielsaft-Trank","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":164,"bottom":21,"pngfb":false,"pr":{"l":"Lib","i":780}}}},{"kind":"item","itemdata":"choices.choice_60x7IqQsuLT","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_60x7IqQsuLT_220805782","type":"vectortext","altText":"Veritaserum","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":156,"bottom":21,"pngfb":false,"pr":{"l":"Lib","i":781}}}}]},"width":255,"height":23,"resume":true,"useHandCursor":true,"id":"6LBwAGjDfPL"},{"kind":"droplist","shuffle":true,"reviewwidth":127,"reviewindex":0,"shapemaskId":"","xPos":0,"yPos":10,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":127.5,"rotateYPos":11.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"item_hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xADFFFF","alpha":100,"stop":0}]}},{"kind":"color","name":"button_hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xD5FFFF","alpha":100,"stop":0}]}},{"kind":"color","name":"review_text","fill":{"type":"linear","rotation":0,"colors":[{"kind":"color","rgb":"0x000000","alpha":100,"stop":0}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt2_60x7IqQsuLT","type":"vectortext","altText":"--Auswählen--","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":88,"bottom":21,"pngfb":false,"pr":{"l":"Lib","i":778}}},"itemlist":[{"kind":"item","itemdata":"choices.choice_5ntqPPzVANI","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5ntqPPzVANI_1466534675","type":"vectortext","altText":"Felix Felicis","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":155,"bottom":21,"pngfb":false,"pr":{"l":"Lib","i":779}}}},{"kind":"item","itemdata":"choices.choice_6LBwAGjDfPL","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6LBwAGjDfPL_858913170","type":"vectortext","altText":"Vielsaft-Trank","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":164,"bottom":21,"pngfb":false,"pr":{"l":"Lib","i":780}}}},{"kind":"item","itemdata":"choices.choice_60x7IqQsuLT","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_60x7IqQsuLT_220805782","type":"vectortext","altText":"Veritaserum","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":156,"bottom":21,"pngfb":false,"pr":{"l":"Lib","i":781}}}}]},"width":255,"height":23,"resume":true,"useHandCursor":true,"id":"5ntqPPzVANI"}],"shuffle":false,"depth":1,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5ntqPPzVANI_ReviewShape","id":"01","linkId":"5ntqPPzVANI_ReviewShape","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":99,"bottom":19,"pngfb":false,"pr":{"l":"Lib","i":783}}}],"shapemaskId":"","xPos":137,"yPos":12,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":63.5,"rotateYPos":9,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":99,"bottom":19,"altText":"Felix Felicis","pngfb":false,"pr":{"l":"Lib","i":782}},"html5data":{"xPos":0,"yPos":0,"width":99,"height":19,"strokewidth":0}},"width":127,"height":18,"resume":false,"useHandCursor":true,"id":"5ntqPPzVANI_ReviewShape"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6LBwAGjDfPL_ReviewShape","id":"01","linkId":"6LBwAGjDfPL_ReviewShape","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":107,"bottom":19,"pngfb":false,"pr":{"l":"Lib","i":784}}}],"shapemaskId":"","xPos":137,"yPos":55,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":63.5,"rotateYPos":9,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":107,"bottom":19,"altText":"Vielsaft-Trank","pngfb":false,"pr":{"l":"Lib","i":782}},"html5data":{"xPos":0,"yPos":0,"width":107,"height":19,"strokewidth":0}},"width":127,"height":18,"resume":false,"useHandCursor":true,"id":"6LBwAGjDfPL_ReviewShape"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"60x7IqQsuLT_ReviewShape","id":"01","linkId":"60x7IqQsuLT_ReviewShape","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":102,"bottom":19,"pngfb":false,"pr":{"l":"Lib","i":785}}}],"shapemaskId":"","xPos":137,"yPos":98,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":63.5,"rotateYPos":9,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":102,"bottom":19,"altText":"Veritaserum","pngfb":false,"pr":{"l":"Lib","i":782}},"html5data":{"xPos":0,"yPos":0,"width":102,"height":19,"strokewidth":0}},"width":127,"height":18,"resume":false,"useHandCursor":true,"id":"60x7IqQsuLT_ReviewShape"}],"shapemaskId":"","xPos":220,"yPos":192,"tabIndex":3,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":140,"rotateYPos":83,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":0,"yPos":0,"width":280,"height":166,"strokewidth":0}},"width":280,"height":166,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":280,"bottom":166,"altText":"Dropdown-Sequenz","pngfb":false,"pr":{"l":"Lib","i":777}}},"id":"5fKnLFmlj6L"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6CMxpWbmxho_1299141244","id":"01","linkId":"txt__default_6CMxpWbmxho","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":544,"bottom":54,"pngfb":false,"pr":{"l":"Lib","i":787}}}],"shapemaskId":"","xPos":36,"yPos":60,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":29,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":648,"bottom":58,"altText":"Ordne die Tränke nach ihrer Zubereitungsdauer\\rBeginne mit der längsten Dauer.","pngfb":false,"pr":{"l":"Lib","i":786}},"html5data":{"xPos":0,"yPos":0,"width":648,"height":58,"strokewidth":0}},"width":648,"height":58,"resume":true,"useHandCursor":true,"id":"6CMxpWbmxho"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"ondoubleclick","shapemaskId":"","xPos":683,"yPos":3,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":11.5,"rotateYPos":28,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":23,"bottom":56,"altText":"harry potter Symbol 2","pngfb":false,"pr":{"l":"Lib","i":753}},"html5data":{"xPos":0,"yPos":0,"width":23,"height":56,"strokewidth":0}},"width":23,"height":56,"resume":true,"useHandCursor":true,"id":"5jtFyr6Vxgj","events":[{"kind":"ondoubleclick","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6afPxKduukt.6iYswwx4co6"}}]},{"kind":"onrollover","actions":[{"kind":"adjustvar","variable":"_parent.6JRpaEgponL_65aPtQ0tZ1A_showing","operator":"set","value":{"type":"property","value":"_parent.65aPtQ0tZ1A.$OnStage"}},{"kind":"store_resume_data","objRef":"_parent.65aPtQ0tZ1A","varref":"_parent.6JRpaEgponL_65aPtQ0tZ1A_resume"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.65aPtQ0tZ1A.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.65aPtQ0tZ1A"}}]},{"kind":"set_enabled","objRef":{"type":"string","value":"_parent.65aPtQ0tZ1A"},"enabled":{"type":"boolean","value":true}}]},{"kind":"onrollout","actions":[{"kind":"restore_resume_state","objRef":"_parent.65aPtQ0tZ1A","varref":"_parent.6JRpaEgponL_65aPtQ0tZ1A_resume","limited":false},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.#6JRpaEgponL_65aPtQ0tZ1A_showing","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_parent.65aPtQ0tZ1A"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.65aPtQ0tZ1A"}}]}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"65aPtQ0tZ1A_-1201703463","id":"01","linkId":"txt__default_65aPtQ0tZ1A","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":104,"bottom":27,"pngfb":false,"pr":{"l":"Lib","i":755}}}],"shapemaskId":"","xPos":584,"yPos":23,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":57,"rotateYPos":15.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":114,"bottom":31,"altText":"abbrechen","pngfb":false,"pr":{"l":"Lib","i":754}},"html5data":{"xPos":0,"yPos":0,"width":114,"height":31,"strokewidth":0}},"width":114,"height":31,"resume":true,"useHandCursor":true,"id":"65aPtQ0tZ1A"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":10,"yPos":505,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":18.5,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":38,"bottom":24,"altText":"Arrow Symbol 1","pngfb":false,"pr":{"l":"Lib","i":52}},"html5data":{"xPos":0,"yPos":0,"width":37,"height":24,"strokewidth":0}},"width":37,"height":24,"resume":true,"useHandCursor":true,"id":"6dFuW6DpB0m","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6l6FRnnXvnS.5ikmxILm5jZ"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":671,"yPos":501,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":18.5,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":38,"bottom":24,"altText":"Arrow Symbol 1","pngfb":false,"pr":{"l":"Lib","i":51}},"html5data":{"xPos":0,"yPos":0,"width":38,"height":24,"strokewidth":0}},"width":37,"height":24,"resume":true,"useHandCursor":true,"id":"6GAX8QnMQRy","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6l6FRnnXvnS.5eWrpu2nAgU"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5fKnLFmlj6L_CorrectReview","id":"01","linkId":"5fKnLFmlj6L_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":393,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":757}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Richtig","pngfb":false,"pr":{"l":"Lib","i":756}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5fKnLFmlj6L_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5fKnLFmlj6L_IncorrectReview","id":"01","linkId":"5fKnLFmlj6L_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":388,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":759}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Falsch","pngfb":false,"pr":{"l":"Lib","i":758}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5fKnLFmlj6L_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');