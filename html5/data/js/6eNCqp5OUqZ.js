window.globalProvideData('slide', '{"title":"Wie lautet Lord Voldemorts vollständiger Name?","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":14,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide14","width":720,"height":540,"resume":true,"background":{"type":"swf","imagedata":{"assetId":0,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"6eNCqp5OUqZ","variables":[{"kind":"variable","name":"6eNCqp5OUqZ_6bjA3g8Ixzo_resume","type":"string","value":"","resume":false},{"kind":"variable","name":"6eNCqp5OUqZ_6bjA3g8Ixzo_showing","type":"boolean","value":true,"resume":true}],"actionGroups":{"ReviewInt_5ZipoENp0ma":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6dUAo8EpaLo"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"65EK10k1SDC.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ZipoENp0ma_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ZipoENp0ma_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5ZipoENp0ma","typea":"var","valueb":"5q57D6LG6gp","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00001100001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5q57D6LG6gp.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5ZipoENp0ma"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5q57D6LG6gp.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5ZipoENp0ma"}]}]}]},"ReviewIntCorrectIncorrect_5ZipoENp0ma":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ZipoENp0ma_ReviewShape"}}]},"AnsweredInt_5ZipoENp0ma":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5ZipoENp0ma"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100001"}]}]},"DisableChoices_5ZipoENp0ma":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6dUAo8EpaLo"},"enabled":{"type":"boolean","value":false}}]},"5ZipoENp0ma_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"65EK10k1SDC.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5q57D6LG6gp.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5ZipoENp0ma"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"65EK10k1SDC.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"65EK10k1SDC.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5ZipoENp0ma"}]}]}]}]},"SetLayout_pxabnsnfns00001100001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100001"}]}]},"NavigationRestrictionNextSlide_6eNCqp5OUqZ":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6NeeVOjiGE1"}}]},"NavigationRestrictionPreviousSlide_6eNCqp5OUqZ":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00001100001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_66Q1QuLcTQy","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_66Q1QuLcTQy","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5ZipoENp0ma","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5ZipoENp0ma"}],"elseActions":[{"kind":"exe_actiongroup","id":"5ZipoENp0ma_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5ZipoENp0ma","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5ZipoENp0ma","typea":"var","valueb":"5q57D6LG6gp","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5q57D6LG6gp"},"completed_slide_ref":{"type":"string","value":"_player.6Q4uyFyqeJv.5ZM5JH4Ezc6"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5ZipoENp0ma","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5ZipoENp0ma","typea":"var","valueb":"5q57D6LG6gp","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5q57D6LG6gp"},"completed_slide_ref":{"type":"string","value":"_player.6Q4uyFyqeJv.5ZM5JH4Ezc6"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6eNCqp5OUqZ"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6eNCqp5OUqZ"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"5ZipoENp0ma_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6dUAo8EpaLo"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5YjnREBt79p"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6SHNapMPawj"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5j1nbZh7tYn"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6KzOUYQnXuY"}}]}]},"objects":[{"kind":"textinput","bindto":"_player.Texteingabe19","align":"center","verticalAlign":"top","rtl":false,"numeric":false,"multiline":false,"maxchars":0,"placeholder":"Text hier eingeben","fontsize":16,"textcolor":"0x0F243E","bold":false,"italic":false,"font":"Centaur Charset0_v2miL749C3C438","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":185,"yPos":220,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":174.5,"rotateYPos":14.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6dUAo8EpaLo","linkId":"","type":"vectortext","xPos":10,"yPos":5,"width":330,"height":30,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":220,"bottom":19,"pngfb":false,"pr":{"l":"Lib","i":1239}}},"html5data":{"xPos":0,"yPos":0,"width":350,"height":30,"strokewidth":1}},"width":350,"height":30,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":351,"bottom":31,"altText":"Text hier eingeben","pngfb":false,"pr":{"l":"Lib","i":825}}},"id":"6dUAo8EpaLo","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.Texteingabe19","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"eval_interaction","id":"_parent.65EK10k1SDC"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5YjnREBt79p_1031017475","id":"01","linkId":"txt__default_5YjnREBt79p","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":552,"bottom":33,"pngfb":false,"pr":{"l":"Lib","i":1603}}}],"shapemaskId":"","xPos":36,"yPos":60,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":18.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":648,"bottom":37,"altText":"Wie lautet Lord Voldemorts vollständiger Name?","pngfb":false,"pr":{"l":"Lib","i":823}},"html5data":{"xPos":0,"yPos":0,"width":648,"height":37,"strokewidth":0}},"width":648,"height":37,"resume":true,"useHandCursor":true,"id":"5YjnREBt79p"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"ondoubleclick","shapemaskId":"","xPos":683,"yPos":3,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":11.5,"rotateYPos":28,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":23,"bottom":56,"altText":"harry potter Symbol 2","pngfb":false,"pr":{"l":"Lib","i":753}},"html5data":{"xPos":0,"yPos":0,"width":23,"height":56,"strokewidth":0}},"width":23,"height":56,"resume":true,"useHandCursor":true,"id":"6SHNapMPawj","events":[{"kind":"ondoubleclick","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6afPxKduukt.6iYswwx4co6"}}]},{"kind":"onrollover","actions":[{"kind":"adjustvar","variable":"_parent.6eNCqp5OUqZ_6bjA3g8Ixzo_showing","operator":"set","value":{"type":"property","value":"_parent.6bjA3g8Ixzo.$OnStage"}},{"kind":"store_resume_data","objRef":"_parent.6bjA3g8Ixzo","varref":"_parent.6eNCqp5OUqZ_6bjA3g8Ixzo_resume"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6bjA3g8Ixzo.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.6bjA3g8Ixzo"}}]},{"kind":"set_enabled","objRef":{"type":"string","value":"_parent.6bjA3g8Ixzo"},"enabled":{"type":"boolean","value":true}}]},{"kind":"onrollout","actions":[{"kind":"restore_resume_state","objRef":"_parent.6bjA3g8Ixzo","varref":"_parent.6eNCqp5OUqZ_6bjA3g8Ixzo_resume","limited":false},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.#6eNCqp5OUqZ_6bjA3g8Ixzo_showing","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_parent.6bjA3g8Ixzo"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.6bjA3g8Ixzo"}}]}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6bjA3g8Ixzo_-440073010","id":"01","linkId":"txt__default_6bjA3g8Ixzo","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":104,"bottom":27,"pngfb":false,"pr":{"l":"Lib","i":755}}}],"shapemaskId":"","xPos":584,"yPos":23,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":57,"rotateYPos":15.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":114,"bottom":31,"altText":"abbrechen","pngfb":false,"pr":{"l":"Lib","i":754}},"html5data":{"xPos":0,"yPos":0,"width":114,"height":31,"strokewidth":0}},"width":114,"height":31,"resume":true,"useHandCursor":true,"id":"6bjA3g8Ixzo"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":10,"yPos":505,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":18.5,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":38,"bottom":24,"altText":"Arrow Symbol 1","pngfb":false,"pr":{"l":"Lib","i":52}},"html5data":{"xPos":0,"yPos":0,"width":37,"height":24,"strokewidth":0}},"width":37,"height":24,"resume":true,"useHandCursor":true,"id":"5j1nbZh7tYn","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Q4uyFyqeJv.6irQJAr6Yk0"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":671,"yPos":501,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":18.5,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":38,"bottom":24,"altText":"Arrow Symbol 1","pngfb":false,"pr":{"l":"Lib","i":51}},"html5data":{"xPos":0,"yPos":0,"width":38,"height":24,"strokewidth":0}},"width":37,"height":24,"resume":true,"useHandCursor":true,"id":"6KzOUYQnXuY","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Q4uyFyqeJv.6NeeVOjiGE1"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5ZipoENp0ma_CorrectReview","id":"01","linkId":"5ZipoENp0ma_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":393,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":757}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Richtig","pngfb":false,"pr":{"l":"Lib","i":756}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5ZipoENp0ma_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5ZipoENp0ma_IncorrectReview","id":"01","linkId":"5ZipoENp0ma_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":388,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":759}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Falsch","pngfb":false,"pr":{"l":"Lib","i":758}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5ZipoENp0ma_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_5ZipoENp0ma_ReviewShape","id":"01","linkId":"txt_5ZipoENp0ma_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":380,"bottom":370,"pngfb":false,"pr":{"l":"Lib","i":1604}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":6,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":212,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":700,"bottom":374,"altText":"","pngfb":false,"pr":{"l":"Lib","i":1601}},"html5data":{"xPos":1,"yPos":1,"width":698,"height":372,"strokewidth":1}},"width":648,"height":424,"resume":false,"useHandCursor":true,"id":"5ZipoENp0ma_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');