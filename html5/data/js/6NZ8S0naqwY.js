window.globalProvideData('slide', '{"title":"Ordne die magischen Wesen aufsteigend nach ihrer Zauberministeriums-Klassifizierung.","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":9,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide9","width":720,"height":540,"resume":true,"background":{"type":"swf","imagedata":{"assetId":0,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"6NZ8S0naqwY","variables":[{"kind":"variable","name":"6NZ8S0naqwY_6jmDn7KZGs9_resume","type":"string","value":"","resume":false},{"kind":"variable","name":"6NZ8S0naqwY_6jmDn7KZGs9_showing","type":"boolean","value":true,"resume":true}],"actionGroups":{"ReviewInt_5yBez9S7zjX":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6VSfPpN2rrs.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5yBez9S7zjX_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5yBez9S7zjX_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5yBez9S7zjX","typea":"var","valueb":"6rf1ztNw10q","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00001100001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6rf1ztNw10q.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5yBez9S7zjX"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6rf1ztNw10q.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5yBez9S7zjX"}]}]},{"kind":"set_enabled","objRef":{"type":"string","value":"list_5yBez9S7zjX"},"enabled":{"type":"boolean","value":false}}]},"ReviewIntCorrectIncorrect_5yBez9S7zjX":{"kind":"actiongroup","actions":[{"kind":"set_review","objRef":{"type":"string","value":"list_5yBez9S7zjX"},"enabled":{"type":"boolean","value":true}}]},"AnsweredInt_5yBez9S7zjX":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5yBez9S7zjX"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100001"}]},{"kind":"set_enabled","objRef":{"type":"string","value":"list_5yBez9S7zjX"},"enabled":{"type":"boolean","value":false}}]},"DisableChoices_5yBez9S7zjX":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"list_5yBez9S7zjX"},"enabled":{"type":"boolean","value":false}}]},"5yBez9S7zjX_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6VSfPpN2rrs.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6rf1ztNw10q.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5yBez9S7zjX"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6VSfPpN2rrs.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6VSfPpN2rrs.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5yBez9S7zjX"}]}]}]}]},"SetLayout_pxabnsnfns00001100001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100001"}]}]},"NavigationRestrictionNextSlide_6NZ8S0naqwY":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.69uZgaViED6"}}]},"NavigationRestrictionPreviousSlide_6NZ8S0naqwY":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00001100001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6o4bq0j3aew","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6o4bq0j3aew","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5yBez9S7zjX","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5yBez9S7zjX"}],"elseActions":[{"kind":"exe_actiongroup","id":"5yBez9S7zjX_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5yBez9S7zjX","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5yBez9S7zjX","typea":"var","valueb":"6rf1ztNw10q","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6rf1ztNw10q"},"completed_slide_ref":{"type":"string","value":"_player.6jE23MTU0Yu.6cvYGbvxeee"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5yBez9S7zjX","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5yBez9S7zjX","typea":"var","valueb":"6rf1ztNw10q","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6rf1ztNw10q"},"completed_slide_ref":{"type":"string","value":"_player.6jE23MTU0Yu.6cvYGbvxeee"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6NZ8S0naqwY"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6NZ8S0naqwY"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"list_5yBez9S7zjX"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6mfjUBkwplf"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6EK7MOeH8si"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6W0sTg96mC2"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qKTIsoFOC9"}}]}]},"objects":[{"kind":"sequencectrl","rtl":false,"shapemaskId":"","xPos":220,"yPos":178,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":131.25,"rotateYPos":127,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"number_text","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0x000000","alpha":100,"stop":0}]}},{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"itemlist":[{"kind":"item","itemdata":"choices.choice_6UptsmBrk3h","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6UptsmBrk3h","type":"vectortext","altText":"Flubberwurm","lmstext":"Flubberwurm","xPos":10,"yPos":3,"width":208,"height":27,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":150,"bottom":22,"altText":"Flubberwurm","lmstext":"Flubberwurm","pngfb":false,"pr":{"l":"Lib","i":1280}}}},{"kind":"item","itemdata":"choices.choice_5X9Nfi2OANG","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5X9Nfi2OANG","type":"vectortext","altText":"Ghul","lmstext":"Ghul","xPos":10,"yPos":3,"width":208,"height":27,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":122,"bottom":22,"altText":"Ghul","lmstext":"Ghul","pngfb":false,"pr":{"l":"Lib","i":1281}}}},{"kind":"item","itemdata":"choices.choice_5WVqNUFtUdh","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5WVqNUFtUdh","type":"vectortext","altText":"Kniesel","lmstext":"Kniesel","xPos":10,"yPos":3,"width":208,"height":27,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":129,"bottom":22,"altText":"Kniesel","lmstext":"Kniesel","pngfb":false,"pr":{"l":"Lib","i":1282}}}},{"kind":"item","itemdata":"choices.choice_69QvMNXrtiI","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_69QvMNXrtiI","type":"vectortext","altText":"Einhorn","lmstext":"Einhorn","xPos":10,"yPos":3,"width":208,"height":27,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":132,"bottom":22,"altText":"Einhorn","lmstext":"Einhorn","pngfb":false,"pr":{"l":"Lib","i":1283}}}},{"kind":"item","itemdata":"choices.choice_5z4xAZMmE35","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5z4xAZMmE35","type":"vectortext","altText":"Drache","lmstext":"Drache","xPos":10,"yPos":3,"width":208,"height":27,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":129,"bottom":22,"altText":"Drache","lmstext":"Drache","pngfb":false,"pr":{"l":"Lib","i":1284}}}}]},"width":262,"height":254,"resume":true,"useHandCursor":true,"id":"list_5yBez9S7zjX"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6mfjUBkwplf_-1917237223","id":"01","linkId":"txt__default_6mfjUBkwplf","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":564,"bottom":60,"pngfb":false,"pr":{"l":"Lib","i":1285}}}],"shapemaskId":"","xPos":36,"yPos":60,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":32,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":648,"bottom":64,"altText":"Ordne die magischen Wesen aufsteigend nach ihrer Zauberministeriums-Klassifizierung.","pngfb":false,"pr":{"l":"Lib","i":800}},"html5data":{"xPos":0,"yPos":0,"width":648,"height":64,"strokewidth":0}},"width":648,"height":64,"resume":true,"useHandCursor":true,"id":"6mfjUBkwplf"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"ondoubleclick","shapemaskId":"","xPos":683,"yPos":3,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":11.5,"rotateYPos":28,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":23,"bottom":56,"altText":"harry potter Symbol 2","pngfb":false,"pr":{"l":"Lib","i":753}},"html5data":{"xPos":0,"yPos":0,"width":23,"height":56,"strokewidth":0}},"width":23,"height":56,"resume":true,"useHandCursor":true,"id":"6EK7MOeH8si","events":[{"kind":"ondoubleclick","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6afPxKduukt.6iYswwx4co6"}}]},{"kind":"onrollover","actions":[{"kind":"adjustvar","variable":"_parent.6NZ8S0naqwY_6jmDn7KZGs9_showing","operator":"set","value":{"type":"property","value":"_parent.6jmDn7KZGs9.$OnStage"}},{"kind":"store_resume_data","objRef":"_parent.6jmDn7KZGs9","varref":"_parent.6NZ8S0naqwY_6jmDn7KZGs9_resume"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6jmDn7KZGs9.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.6jmDn7KZGs9"}}]},{"kind":"set_enabled","objRef":{"type":"string","value":"_parent.6jmDn7KZGs9"},"enabled":{"type":"boolean","value":true}}]},{"kind":"onrollout","actions":[{"kind":"restore_resume_state","objRef":"_parent.6jmDn7KZGs9","varref":"_parent.6NZ8S0naqwY_6jmDn7KZGs9_resume","limited":false},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.#6NZ8S0naqwY_6jmDn7KZGs9_showing","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_parent.6jmDn7KZGs9"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.6jmDn7KZGs9"}}]}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6jmDn7KZGs9_1970736798","id":"01","linkId":"txt__default_6jmDn7KZGs9","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":104,"bottom":27,"pngfb":false,"pr":{"l":"Lib","i":755}}}],"shapemaskId":"","xPos":584,"yPos":23,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":57,"rotateYPos":15.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":114,"bottom":31,"altText":"abbrechen","pngfb":false,"pr":{"l":"Lib","i":754}},"html5data":{"xPos":0,"yPos":0,"width":114,"height":31,"strokewidth":0}},"width":114,"height":31,"resume":true,"useHandCursor":true,"id":"6jmDn7KZGs9"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":10,"yPos":505,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":18.5,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":38,"bottom":24,"altText":"Arrow Symbol 1","pngfb":false,"pr":{"l":"Lib","i":52}},"html5data":{"xPos":0,"yPos":0,"width":37,"height":24,"strokewidth":0}},"width":37,"height":24,"resume":true,"useHandCursor":true,"id":"6W0sTg96mC2","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6jE23MTU0Yu.6chkdDoCytC"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":671,"yPos":501,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":18.5,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":38,"bottom":24,"altText":"Arrow Symbol 1","pngfb":false,"pr":{"l":"Lib","i":51}},"html5data":{"xPos":0,"yPos":0,"width":38,"height":24,"strokewidth":0}},"width":37,"height":24,"resume":true,"useHandCursor":true,"id":"6qKTIsoFOC9","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6jE23MTU0Yu.69uZgaViED6"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5yBez9S7zjX_CorrectReview","id":"01","linkId":"5yBez9S7zjX_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":393,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":757}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Richtig","pngfb":false,"pr":{"l":"Lib","i":756}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5yBez9S7zjX_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5yBez9S7zjX_IncorrectReview","id":"01","linkId":"5yBez9S7zjX_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":388,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":759}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Falsch","pngfb":false,"pr":{"l":"Lib","i":758}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5yBez9S7zjX_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');