window.globalProvideData('slide', '{"title":"Warum ist Nagini so wichtig für Voldemort.\\rSie ist ein…","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":19,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide19","width":720,"height":540,"resume":true,"background":{"type":"swf","imagedata":{"assetId":0,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"6fGWRiDGsfj","variables":[{"kind":"variable","name":"6fGWRiDGsfj_6rjNY5zbCmK_resume","type":"string","value":"","resume":false},{"kind":"variable","name":"6fGWRiDGsfj_6rjNY5zbCmK_showing","type":"boolean","value":true,"resume":true}],"actionGroups":{"ReviewInt_5oWvdeguSSs":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6eMNe2WxVci"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6S7HGjnszaH.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5oWvdeguSSs_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5oWvdeguSSs_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5oWvdeguSSs","typea":"var","valueb":"5lYrZmO0kRm","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00001100001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5lYrZmO0kRm.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5oWvdeguSSs"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5lYrZmO0kRm.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5oWvdeguSSs"}]}]}]},"ReviewIntCorrectIncorrect_5oWvdeguSSs":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5oWvdeguSSs_ReviewShape"}}]},"AnsweredInt_5oWvdeguSSs":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5oWvdeguSSs"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100001"}]}]},"DisableChoices_5oWvdeguSSs":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6eMNe2WxVci"},"enabled":{"type":"boolean","value":false}}]},"5oWvdeguSSs_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6S7HGjnszaH.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5lYrZmO0kRm.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5oWvdeguSSs"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6S7HGjnszaH.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6S7HGjnszaH.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5oWvdeguSSs"}]}]}]}]},"SetLayout_pxabnsnfns00001100001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100001"}]}]},"NavigationRestrictionNextSlide_6fGWRiDGsfj":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6rBi5vOHA3a"}}]},"NavigationRestrictionPreviousSlide_6fGWRiDGsfj":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00001100001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6o4bq0j3aew","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6o4bq0j3aew","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5oWvdeguSSs","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5oWvdeguSSs"}],"elseActions":[{"kind":"exe_actiongroup","id":"5oWvdeguSSs_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5oWvdeguSSs","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5oWvdeguSSs","typea":"var","valueb":"5lYrZmO0kRm","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5lYrZmO0kRm"},"completed_slide_ref":{"type":"string","value":"_player.6SCrwFusUPb.6EcQSDrNBFa"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5oWvdeguSSs","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5oWvdeguSSs","typea":"var","valueb":"5lYrZmO0kRm","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5lYrZmO0kRm"},"completed_slide_ref":{"type":"string","value":"_player.6SCrwFusUPb.6EcQSDrNBFa"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6fGWRiDGsfj"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6fGWRiDGsfj"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"61j4wVNUxGi"}},{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"5oWvdeguSSs_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6eMNe2WxVci"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6hFOasF3IV5"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5g0dIIXpFYv"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5fgup8VrJDt"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5xsGArbpAx5"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"63ZBLmp34BF"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":309,"id":"01","url":"story_content/5yamZmrD67w_80_P_0_89_659_192_DX1220_DY1220.swf","type":"normal","altText":"nagini2.jpg","width":659,"height":192,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":56,"yPos":351,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":305,"rotateYPos":89,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":610,"bottom":178,"altText":"nagini2.jpg","pngfb":false,"pr":{"l":"Lib","i":2399}},"html5data":{"xPos":0,"yPos":0,"width":610,"height":178,"strokewidth":0}},"width":610,"height":178,"resume":true,"useHandCursor":true,"id":"61j4wVNUxGi"},{"kind":"textinput","bindto":"_player.Texteingabe36","align":"center","verticalAlign":"top","rtl":false,"numeric":false,"multiline":false,"maxchars":0,"placeholder":"Text hier eingeben","fontsize":19,"textcolor":"0x0F243E","bold":false,"italic":false,"font":"Centaur Charset0_v2miL749C3C438","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":185,"yPos":314,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":174.5,"rotateYPos":14.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6eMNe2WxVci","linkId":"","type":"vectortext","xPos":10,"yPos":5,"width":330,"height":30,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":223,"bottom":20,"pngfb":false,"pr":{"l":"Lib","i":826}}},"html5data":{"xPos":0,"yPos":0,"width":350,"height":30,"strokewidth":1}},"width":350,"height":30,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":351,"bottom":31,"altText":"Text hier eingeben","pngfb":false,"pr":{"l":"Lib","i":825}}},"id":"6eMNe2WxVci","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.Texteingabe36","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"eval_interaction","id":"_parent.6S7HGjnszaH"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6hFOasF3IV5_2104731753","id":"01","linkId":"txt__default_6hFOasF3IV5","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":530,"bottom":84,"pngfb":false,"pr":{"l":"Lib","i":2401}}}],"shapemaskId":"","xPos":36,"yPos":223,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":45.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":648,"bottom":91,"altText":"Warum ist Nagini so wichtig für Voldemort.\\rSie ist ein…","pngfb":false,"pr":{"l":"Lib","i":2400}},"html5data":{"xPos":0,"yPos":0,"width":648,"height":91,"strokewidth":0}},"width":648,"height":91,"resume":true,"useHandCursor":true,"id":"6hFOasF3IV5"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5g0dIIXpFYv_-1995043790","id":"01","linkId":"txt__default_5g0dIIXpFYv","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":682,"bottom":194,"pngfb":false,"pr":{"l":"Lib","i":2402}}}],"shapemaskId":"","xPos":13,"yPos":23,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":347,"rotateYPos":100,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":694,"bottom":200,"altText":"Der Zauber wurde erfolgereich ausgeführt!\\rSolangsam solltest du wirklich nach Hause gehen. Deine Eltern machen sich bestimmt schon Sorgen.\\rDu verabschiedest dich von den Weasleys und läufst los. Doch nach kurzer Zeit stößt du auf eine neues Hindernis. \\rVoldemorts Schlange Nagini stellt sich vor dir auf!","pngfb":false,"pr":{"l":"Lib","i":2230}},"html5data":{"xPos":0,"yPos":0,"width":694,"height":200,"strokewidth":0}},"width":694,"height":200,"resume":true,"useHandCursor":true,"id":"5g0dIIXpFYv"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"ondoubleclick","shapemaskId":"","xPos":683,"yPos":3,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":11.5,"rotateYPos":28,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":23,"bottom":56,"altText":"harry potter Symbol 2","pngfb":false,"pr":{"l":"Lib","i":753}},"html5data":{"xPos":0,"yPos":0,"width":23,"height":56,"strokewidth":0}},"width":23,"height":56,"resume":true,"useHandCursor":true,"id":"5fgup8VrJDt","events":[{"kind":"ondoubleclick","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6afPxKduukt.6iYswwx4co6"}}]},{"kind":"onrollover","actions":[{"kind":"adjustvar","variable":"_parent.6fGWRiDGsfj_6rjNY5zbCmK_showing","operator":"set","value":{"type":"property","value":"_parent.6rjNY5zbCmK.$OnStage"}},{"kind":"store_resume_data","objRef":"_parent.6rjNY5zbCmK","varref":"_parent.6fGWRiDGsfj_6rjNY5zbCmK_resume"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6rjNY5zbCmK.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.6rjNY5zbCmK"}}]},{"kind":"set_enabled","objRef":{"type":"string","value":"_parent.6rjNY5zbCmK"},"enabled":{"type":"boolean","value":true}}]},{"kind":"onrollout","actions":[{"kind":"restore_resume_state","objRef":"_parent.6rjNY5zbCmK","varref":"_parent.6fGWRiDGsfj_6rjNY5zbCmK_resume","limited":false},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.#6fGWRiDGsfj_6rjNY5zbCmK_showing","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_parent.6rjNY5zbCmK"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.6rjNY5zbCmK"}}]}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6rjNY5zbCmK_439872347","id":"01","linkId":"txt__default_6rjNY5zbCmK","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":104,"bottom":27,"pngfb":false,"pr":{"l":"Lib","i":755}}}],"shapemaskId":"","xPos":584,"yPos":23,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":57,"rotateYPos":15.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":114,"bottom":31,"altText":"abbrechen","pngfb":false,"pr":{"l":"Lib","i":754}},"html5data":{"xPos":0,"yPos":0,"width":114,"height":31,"strokewidth":0}},"width":114,"height":31,"resume":true,"useHandCursor":true,"id":"6rjNY5zbCmK"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":10,"yPos":505,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":18.5,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":38,"bottom":24,"altText":"Arrow Symbol 1","pngfb":false,"pr":{"l":"Lib","i":52}},"html5data":{"xPos":0,"yPos":0,"width":37,"height":24,"strokewidth":0}},"width":37,"height":24,"resume":true,"useHandCursor":true,"id":"5xsGArbpAx5","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6SCrwFusUPb.6HNDJeZxFMX"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":671,"yPos":501,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":18.5,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":38,"bottom":24,"altText":"Arrow Symbol 1","pngfb":false,"pr":{"l":"Lib","i":51}},"html5data":{"xPos":0,"yPos":0,"width":38,"height":24,"strokewidth":0}},"width":37,"height":24,"resume":true,"useHandCursor":true,"id":"63ZBLmp34BF","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6SCrwFusUPb.6rBi5vOHA3a"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5oWvdeguSSs_CorrectReview","id":"01","linkId":"5oWvdeguSSs_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":393,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":757}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Richtig","pngfb":false,"pr":{"l":"Lib","i":756}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5oWvdeguSSs_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5oWvdeguSSs_IncorrectReview","id":"01","linkId":"5oWvdeguSSs_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":388,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":759}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Falsch","pngfb":false,"pr":{"l":"Lib","i":758}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5oWvdeguSSs_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_5oWvdeguSSs_ReviewShape","id":"01","linkId":"txt_5oWvdeguSSs_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":308,"bottom":438,"pngfb":false,"pr":{"l":"Lib","i":2404}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":8,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":212,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":700,"bottom":442,"altText":"","pngfb":false,"pr":{"l":"Lib","i":2403}},"html5data":{"xPos":1,"yPos":1,"width":698,"height":440,"strokewidth":1}},"width":648,"height":424,"resume":false,"useHandCursor":true,"id":"5oWvdeguSSs_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');