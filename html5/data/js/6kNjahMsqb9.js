window.globalProvideData('slide', '{"title":"Wer bin ich?\\n\\n\\n\\n\\r“Nur wer den Tod gesehen hat, kann mich sehen.”","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":2,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide2","width":720,"height":540,"resume":true,"background":{"type":"swf","imagedata":{"assetId":0,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"6kNjahMsqb9","variables":[{"kind":"variable","name":"6kNjahMsqb9_6p8NW5HVWhR_resume","type":"string","value":"","resume":false},{"kind":"variable","name":"6kNjahMsqb9_6p8NW5HVWhR_showing","type":"boolean","value":true,"resume":true}],"actionGroups":{"ReviewInt_69W8SZdMDTM":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6Cjexl6EeOd"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"66HbQWVb1BF.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"69W8SZdMDTM_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"69W8SZdMDTM_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_69W8SZdMDTM","typea":"var","valueb":"6rf1ztNw10q","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00001100001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6rf1ztNw10q.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_69W8SZdMDTM"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6rf1ztNw10q.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_69W8SZdMDTM"}]}]}]},"ReviewIntCorrectIncorrect_69W8SZdMDTM":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"69W8SZdMDTM_ReviewShape"}}]},"AnsweredInt_69W8SZdMDTM":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_69W8SZdMDTM"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100001"}]}]},"DisableChoices_69W8SZdMDTM":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6Cjexl6EeOd"},"enabled":{"type":"boolean","value":false}}]},"69W8SZdMDTM_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"66HbQWVb1BF.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6rf1ztNw10q.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_69W8SZdMDTM"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"66HbQWVb1BF.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"66HbQWVb1BF.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_69W8SZdMDTM"}]}]}]}]},"SetLayout_pxabnsnfns00001100001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100001"}]}]},"NavigationRestrictionNextSlide_6kNjahMsqb9":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6DKo9ynU30v"}}]},"NavigationRestrictionPreviousSlide_6kNjahMsqb9":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00001100001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6o4bq0j3aew","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6o4bq0j3aew","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_69W8SZdMDTM","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_69W8SZdMDTM"}],"elseActions":[{"kind":"exe_actiongroup","id":"69W8SZdMDTM_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_69W8SZdMDTM","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_69W8SZdMDTM","typea":"var","valueb":"6rf1ztNw10q","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6rf1ztNw10q"},"completed_slide_ref":{"type":"string","value":"_player.6jE23MTU0Yu.6cvYGbvxeee"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_69W8SZdMDTM","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_69W8SZdMDTM","typea":"var","valueb":"6rf1ztNw10q","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6rf1ztNw10q"},"completed_slide_ref":{"type":"string","value":"_player.6jE23MTU0Yu.6cvYGbvxeee"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6kNjahMsqb9"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6kNjahMsqb9"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"69W8SZdMDTM_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Cjexl6EeOd"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6d1z9avJxhA"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6ht2keGsG7i"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6IkFZb0qlZ3"}}]}]},"objects":[{"kind":"textinput","bindto":"_player.Texteingabe20","align":"center","verticalAlign":"top","rtl":false,"numeric":false,"multiline":false,"maxchars":0,"placeholder":"Text hier eingeben","fontsize":16,"textcolor":"0x0F243E","bold":false,"italic":false,"font":"Centaur Charset0_v2miL749C3C438","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":185,"yPos":270,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":174.5,"rotateYPos":14.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6Cjexl6EeOd","linkId":"","type":"vectortext","xPos":10,"yPos":5,"width":330,"height":30,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":220,"bottom":19,"pngfb":false,"pr":{"l":"Lib","i":1239}}},"html5data":{"xPos":0,"yPos":0,"width":350,"height":30,"strokewidth":1}},"width":350,"height":30,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":351,"bottom":31,"altText":"Text hier eingeben","pngfb":false,"pr":{"l":"Lib","i":825}}},"id":"6Cjexl6EeOd","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.Texteingabe20","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"eval_interaction","id":"_parent.66HbQWVb1BF"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6d1z9avJxhA_410067538","id":"01","linkId":"txt__default_6d1z9avJxhA","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":546,"bottom":170,"pngfb":false,"pr":{"l":"Lib","i":1241}}}],"shapemaskId":"","xPos":36,"yPos":60,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":87,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":648,"bottom":174,"altText":"Wer bin ich?\\n\\n\\n\\n\\r“Nur wer den Tod gesehen hat, kann mich sehen.”","pngfb":false,"pr":{"l":"Lib","i":1240}},"html5data":{"xPos":0,"yPos":0,"width":648,"height":174,"strokewidth":0}},"width":648,"height":174,"resume":true,"useHandCursor":true,"id":"6d1z9avJxhA"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"ondoubleclick","shapemaskId":"","xPos":683,"yPos":3,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":11.5,"rotateYPos":28,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":23,"bottom":56,"altText":"harry potter Symbol 2","pngfb":false,"pr":{"l":"Lib","i":753}},"html5data":{"xPos":0,"yPos":0,"width":23,"height":56,"strokewidth":0}},"width":23,"height":56,"resume":true,"useHandCursor":true,"id":"6ht2keGsG7i","events":[{"kind":"ondoubleclick","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6afPxKduukt.6iYswwx4co6"}}]},{"kind":"onrollover","actions":[{"kind":"adjustvar","variable":"_parent.6kNjahMsqb9_6p8NW5HVWhR_showing","operator":"set","value":{"type":"property","value":"_parent.6p8NW5HVWhR.$OnStage"}},{"kind":"store_resume_data","objRef":"_parent.6p8NW5HVWhR","varref":"_parent.6kNjahMsqb9_6p8NW5HVWhR_resume"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6p8NW5HVWhR.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.6p8NW5HVWhR"}}]},{"kind":"set_enabled","objRef":{"type":"string","value":"_parent.6p8NW5HVWhR"},"enabled":{"type":"boolean","value":true}}]},{"kind":"onrollout","actions":[{"kind":"restore_resume_state","objRef":"_parent.6p8NW5HVWhR","varref":"_parent.6kNjahMsqb9_6p8NW5HVWhR_resume","limited":false},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.#6kNjahMsqb9_6p8NW5HVWhR_showing","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_parent.6p8NW5HVWhR"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.6p8NW5HVWhR"}}]}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6p8NW5HVWhR_1793896684","id":"01","linkId":"txt__default_6p8NW5HVWhR","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":104,"bottom":27,"pngfb":false,"pr":{"l":"Lib","i":755}}}],"shapemaskId":"","xPos":584,"yPos":23,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":57,"rotateYPos":15.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":114,"bottom":31,"altText":"abbrechen","pngfb":false,"pr":{"l":"Lib","i":754}},"html5data":{"xPos":0,"yPos":0,"width":114,"height":31,"strokewidth":0}},"width":114,"height":31,"resume":true,"useHandCursor":true,"id":"6p8NW5HVWhR"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":671,"yPos":501,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":18.5,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":38,"bottom":24,"altText":"Arrow Symbol 1","pngfb":false,"pr":{"l":"Lib","i":51}},"html5data":{"xPos":0,"yPos":0,"width":38,"height":24,"strokewidth":0}},"width":37,"height":24,"resume":true,"useHandCursor":true,"id":"6IkFZb0qlZ3","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6jE23MTU0Yu.6DKo9ynU30v"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"69W8SZdMDTM_CorrectReview","id":"01","linkId":"69W8SZdMDTM_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":393,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":757}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Richtig","pngfb":false,"pr":{"l":"Lib","i":756}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"69W8SZdMDTM_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"69W8SZdMDTM_IncorrectReview","id":"01","linkId":"69W8SZdMDTM_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":388,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":759}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Falsch","pngfb":false,"pr":{"l":"Lib","i":758}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"69W8SZdMDTM_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_69W8SZdMDTM_ReviewShape","id":"01","linkId":"txt_69W8SZdMDTM_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":308,"bottom":394,"pngfb":false,"pr":{"l":"Lib","i":1243}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":5,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":212,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":700,"bottom":398,"altText":"","pngfb":false,"pr":{"l":"Lib","i":1242}},"html5data":{"xPos":1,"yPos":1,"width":698,"height":396,"strokewidth":1}},"width":648,"height":424,"resume":false,"useHandCursor":true,"id":"69W8SZdMDTM_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');