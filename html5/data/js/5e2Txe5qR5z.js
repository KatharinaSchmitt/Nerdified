window.globalProvideData('slide', '{"title":"Ordne die Bewohner Godric Hollows in der Reihenfolge, in der sie dort lebten. ","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":13,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide13","width":720,"height":540,"resume":true,"background":{"type":"swf","imagedata":{"assetId":276,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"5e2Txe5qR5z","variables":[{"kind":"variable","name":"5e2Txe5qR5z_6FK9ZFnA5UL_resume","type":"string","value":"","resume":false},{"kind":"variable","name":"5e2Txe5qR5z_6FK9ZFnA5UL_showing","type":"boolean","value":true,"resume":true}],"actionGroups":{"ReviewInt_5ig968xsNBq":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5ig968xsNBq.5gxE70yt5yT"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5ig968xsNBq.5kJXiKhVfcu"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5ig968xsNBq.5kYATiEbCCN"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5ig968xsNBq.5lElPNPmhC3"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5ig968xsNBq.5n5E24jzSnH"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5YiFQSgFVUD.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ig968xsNBq_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ig968xsNBq_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5ig968xsNBq","typea":"var","valueb":"6gytiNuoFGn","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00001100001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6gytiNuoFGn.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5ig968xsNBq"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6gytiNuoFGn.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5ig968xsNBq"}]}]}]},"ReviewIntCorrectIncorrect_5ig968xsNBq":{"kind":"actiongroup","actions":[{"kind":"set_review","objRef":{"type":"string","value":"5ig968xsNBq.5gxE70yt5yT"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"5ig968xsNBq.5kJXiKhVfcu"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"5ig968xsNBq.5kYATiEbCCN"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"5ig968xsNBq.5lElPNPmhC3"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"5ig968xsNBq.5n5E24jzSnH"},"enabled":{"type":"boolean","value":true}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ig968xsNBq.5gxE70yt5yT_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ig968xsNBq.5kJXiKhVfcu_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ig968xsNBq.5kYATiEbCCN_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ig968xsNBq.5lElPNPmhC3_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ig968xsNBq.5n5E24jzSnH_ReviewShape"}}]},"AnsweredInt_5ig968xsNBq":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5ig968xsNBq"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100001"}]}]},"DisableChoices_5ig968xsNBq":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5ig968xsNBq.5gxE70yt5yT"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5ig968xsNBq.5kJXiKhVfcu"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5ig968xsNBq.5kYATiEbCCN"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5ig968xsNBq.5lElPNPmhC3"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5ig968xsNBq.5n5E24jzSnH"},"enabled":{"type":"boolean","value":false}}]},"5ig968xsNBq_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5YiFQSgFVUD.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6gytiNuoFGn.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5ig968xsNBq"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5YiFQSgFVUD.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5YiFQSgFVUD.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5ig968xsNBq"}]}]}]}]},"SetLayout_pxabnsnfns00001100001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100001"}]}]},"NavigationRestrictionNextSlide_5e2Txe5qR5z":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6QaYwfxpX6p"}}]},"NavigationRestrictionPreviousSlide_5e2Txe5qR5z":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00001100001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6o4bq0j3aew","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6o4bq0j3aew","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5ig968xsNBq","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5ig968xsNBq"}],"elseActions":[{"kind":"exe_actiongroup","id":"5ig968xsNBq_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5ig968xsNBq","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5ig968xsNBq","typea":"var","valueb":"6gytiNuoFGn","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6gytiNuoFGn"},"completed_slide_ref":{"type":"string","value":"_player.6Vapz72mZgw.6ArQyHdyyLX"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5ig968xsNBq","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5ig968xsNBq","typea":"var","valueb":"6gytiNuoFGn","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6gytiNuoFGn"},"completed_slide_ref":{"type":"string","value":"_player.6Vapz72mZgw.6ArQyHdyyLX"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5e2Txe5qR5z"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5e2Txe5qR5z"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ig968xsNBq"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ig968xsNBq.5n5E24jzSnH"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ig968xsNBq.5lElPNPmhC3"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ig968xsNBq.5kYATiEbCCN"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ig968xsNBq.5kJXiKhVfcu"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ig968xsNBq.5gxE70yt5yT"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6jSC92TuSPt"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6WxDU2dV6M3"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6gZTz5FG0sD"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6lmcwv9jPw7"}}]}]},"objects":[{"kind":"scrollarea","contentwidth":255,"contentheight":281,"objects":[{"kind":"shufflegroup","objects":[{"kind":"droplist","shuffle":true,"reviewwidth":127,"reviewindex":4,"shapemaskId":"","xPos":0,"yPos":230,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":127.5,"rotateYPos":17.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"item_hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xADFFFF","alpha":100,"stop":0}]}},{"kind":"color","name":"button_hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xD5FFFF","alpha":100,"stop":0}]}},{"kind":"color","name":"review_text","fill":{"type":"linear","rotation":0,"colors":[{"kind":"color","rgb":"0x000000","alpha":100,"stop":0}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt2_5n5E24jzSnH","type":"vectortext","altText":"--Auswählen--","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":101,"bottom":29,"pngfb":false,"pr":{"l":"Lib","i":2099}}},"itemlist":[{"kind":"item","itemdata":"choices.choice_5gxE70yt5yT","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5gxE70yt5yT_-606151937","type":"vectortext","altText":"Godric Gryffindors Eltern","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":210,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":2100}}}},{"kind":"item","itemdata":"choices.choice_5kJXiKhVfcu","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5kJXiKhVfcu_2022132325","type":"vectortext","altText":"Bowman Wright","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":177,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":2101}}}},{"kind":"item","itemdata":"choices.choice_5kYATiEbCCN","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5kYATiEbCCN_1207899509","type":"vectortext","altText":"Familie Dumbledore","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":191,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":2102}}}},{"kind":"item","itemdata":"choices.choice_5lElPNPmhC3","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5lElPNPmhC3_-1760996673","type":"vectortext","altText":"Familie Potter","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":169,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":2103}}}},{"kind":"item","itemdata":"choices.choice_5n5E24jzSnH","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5n5E24jzSnH_1188595655","type":"vectortext","altText":"Bathilda Bagshot","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":177,"bottom":29,"pngfb":false,"pr":{"l":"Lib","i":2104}}}}]},"width":255,"height":35,"resume":true,"useHandCursor":true,"id":"5n5E24jzSnH"},{"kind":"droplist","shuffle":true,"reviewwidth":127,"reviewindex":3,"shapemaskId":"","xPos":0,"yPos":175,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":127.5,"rotateYPos":17.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"item_hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xADFFFF","alpha":100,"stop":0}]}},{"kind":"color","name":"button_hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xD5FFFF","alpha":100,"stop":0}]}},{"kind":"color","name":"review_text","fill":{"type":"linear","rotation":0,"colors":[{"kind":"color","rgb":"0x000000","alpha":100,"stop":0}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt2_5n5E24jzSnH","type":"vectortext","altText":"--Auswählen--","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":101,"bottom":29,"pngfb":false,"pr":{"l":"Lib","i":2099}}},"itemlist":[{"kind":"item","itemdata":"choices.choice_5gxE70yt5yT","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5gxE70yt5yT_-606151937","type":"vectortext","altText":"Godric Gryffindors Eltern","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":210,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":2100}}}},{"kind":"item","itemdata":"choices.choice_5kJXiKhVfcu","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5kJXiKhVfcu_2022132325","type":"vectortext","altText":"Bowman Wright","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":177,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":2101}}}},{"kind":"item","itemdata":"choices.choice_5kYATiEbCCN","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5kYATiEbCCN_1207899509","type":"vectortext","altText":"Familie Dumbledore","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":191,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":2102}}}},{"kind":"item","itemdata":"choices.choice_5lElPNPmhC3","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5lElPNPmhC3_-1760996673","type":"vectortext","altText":"Familie Potter","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":169,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":2103}}}},{"kind":"item","itemdata":"choices.choice_5n5E24jzSnH","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5n5E24jzSnH_1188595655","type":"vectortext","altText":"Bathilda Bagshot","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":177,"bottom":29,"pngfb":false,"pr":{"l":"Lib","i":2104}}}}]},"width":255,"height":35,"resume":true,"useHandCursor":true,"id":"5lElPNPmhC3"},{"kind":"droplist","shuffle":true,"reviewwidth":127,"reviewindex":2,"shapemaskId":"","xPos":0,"yPos":120,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":127.5,"rotateYPos":17.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"item_hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xADFFFF","alpha":100,"stop":0}]}},{"kind":"color","name":"button_hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xD5FFFF","alpha":100,"stop":0}]}},{"kind":"color","name":"review_text","fill":{"type":"linear","rotation":0,"colors":[{"kind":"color","rgb":"0x000000","alpha":100,"stop":0}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt2_5n5E24jzSnH","type":"vectortext","altText":"--Auswählen--","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":101,"bottom":29,"pngfb":false,"pr":{"l":"Lib","i":2099}}},"itemlist":[{"kind":"item","itemdata":"choices.choice_5gxE70yt5yT","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5gxE70yt5yT_-606151937","type":"vectortext","altText":"Godric Gryffindors Eltern","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":210,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":2100}}}},{"kind":"item","itemdata":"choices.choice_5kJXiKhVfcu","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5kJXiKhVfcu_2022132325","type":"vectortext","altText":"Bowman Wright","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":177,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":2101}}}},{"kind":"item","itemdata":"choices.choice_5kYATiEbCCN","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5kYATiEbCCN_1207899509","type":"vectortext","altText":"Familie Dumbledore","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":191,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":2102}}}},{"kind":"item","itemdata":"choices.choice_5lElPNPmhC3","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5lElPNPmhC3_-1760996673","type":"vectortext","altText":"Familie Potter","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":169,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":2103}}}},{"kind":"item","itemdata":"choices.choice_5n5E24jzSnH","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5n5E24jzSnH_1188595655","type":"vectortext","altText":"Bathilda Bagshot","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":177,"bottom":29,"pngfb":false,"pr":{"l":"Lib","i":2104}}}}]},"width":255,"height":35,"resume":true,"useHandCursor":true,"id":"5kYATiEbCCN"},{"kind":"droplist","shuffle":true,"reviewwidth":127,"reviewindex":1,"shapemaskId":"","xPos":0,"yPos":65,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":127.5,"rotateYPos":17.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":4,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"item_hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xADFFFF","alpha":100,"stop":0}]}},{"kind":"color","name":"button_hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xD5FFFF","alpha":100,"stop":0}]}},{"kind":"color","name":"review_text","fill":{"type":"linear","rotation":0,"colors":[{"kind":"color","rgb":"0x000000","alpha":100,"stop":0}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt2_5n5E24jzSnH","type":"vectortext","altText":"--Auswählen--","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":101,"bottom":29,"pngfb":false,"pr":{"l":"Lib","i":2099}}},"itemlist":[{"kind":"item","itemdata":"choices.choice_5gxE70yt5yT","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5gxE70yt5yT_-606151937","type":"vectortext","altText":"Godric Gryffindors Eltern","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":210,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":2100}}}},{"kind":"item","itemdata":"choices.choice_5kJXiKhVfcu","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5kJXiKhVfcu_2022132325","type":"vectortext","altText":"Bowman Wright","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":177,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":2101}}}},{"kind":"item","itemdata":"choices.choice_5kYATiEbCCN","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5kYATiEbCCN_1207899509","type":"vectortext","altText":"Familie Dumbledore","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":191,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":2102}}}},{"kind":"item","itemdata":"choices.choice_5lElPNPmhC3","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5lElPNPmhC3_-1760996673","type":"vectortext","altText":"Familie Potter","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":169,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":2103}}}},{"kind":"item","itemdata":"choices.choice_5n5E24jzSnH","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5n5E24jzSnH_1188595655","type":"vectortext","altText":"Bathilda Bagshot","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":177,"bottom":29,"pngfb":false,"pr":{"l":"Lib","i":2104}}}}]},"width":255,"height":35,"resume":true,"useHandCursor":true,"id":"5kJXiKhVfcu"},{"kind":"droplist","shuffle":true,"reviewwidth":127,"reviewindex":0,"shapemaskId":"","xPos":0,"yPos":10,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":127.5,"rotateYPos":17.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":5,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"item_hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xADFFFF","alpha":100,"stop":0}]}},{"kind":"color","name":"button_hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xD5FFFF","alpha":100,"stop":0}]}},{"kind":"color","name":"review_text","fill":{"type":"linear","rotation":0,"colors":[{"kind":"color","rgb":"0x000000","alpha":100,"stop":0}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt2_5n5E24jzSnH","type":"vectortext","altText":"--Auswählen--","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":101,"bottom":29,"pngfb":false,"pr":{"l":"Lib","i":2099}}},"itemlist":[{"kind":"item","itemdata":"choices.choice_5gxE70yt5yT","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5gxE70yt5yT_-606151937","type":"vectortext","altText":"Godric Gryffindors Eltern","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":210,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":2100}}}},{"kind":"item","itemdata":"choices.choice_5kJXiKhVfcu","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5kJXiKhVfcu_2022132325","type":"vectortext","altText":"Bowman Wright","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":177,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":2101}}}},{"kind":"item","itemdata":"choices.choice_5kYATiEbCCN","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5kYATiEbCCN_1207899509","type":"vectortext","altText":"Familie Dumbledore","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":191,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":2102}}}},{"kind":"item","itemdata":"choices.choice_5lElPNPmhC3","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5lElPNPmhC3_-1760996673","type":"vectortext","altText":"Familie Potter","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":169,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":2103}}}},{"kind":"item","itemdata":"choices.choice_5n5E24jzSnH","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5n5E24jzSnH_1188595655","type":"vectortext","altText":"Bathilda Bagshot","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":177,"bottom":29,"pngfb":false,"pr":{"l":"Lib","i":2104}}}}]},"width":255,"height":35,"resume":true,"useHandCursor":true,"id":"5gxE70yt5yT"}],"shuffle":false,"depth":1,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5gxE70yt5yT_ReviewShape","id":"01","linkId":"5gxE70yt5yT_ReviewShape","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":116,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":2105}}}],"shapemaskId":"","xPos":137,"yPos":10,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":63.5,"rotateYPos":17.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":116,"bottom":35,"altText":"Godric Gryffindors Eltern","pngfb":false,"pr":{"l":"Lib","i":782}},"html5data":{"xPos":0,"yPos":0,"width":116,"height":35,"strokewidth":0}},"width":127,"height":35,"resume":false,"useHandCursor":true,"id":"5gxE70yt5yT_ReviewShape"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5kJXiKhVfcu_ReviewShape","id":"01","linkId":"5kJXiKhVfcu_ReviewShape","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":119,"bottom":24,"pngfb":false,"pr":{"l":"Lib","i":2106}}}],"shapemaskId":"","xPos":137,"yPos":70,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":63.5,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":119,"bottom":24,"altText":"Bowman Wright","pngfb":false,"pr":{"l":"Lib","i":782}},"html5data":{"xPos":0,"yPos":0,"width":119,"height":24,"strokewidth":0}},"width":127,"height":24,"resume":false,"useHandCursor":true,"id":"5kJXiKhVfcu_ReviewShape"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5kYATiEbCCN_ReviewShape","id":"01","linkId":"5kYATiEbCCN_ReviewShape","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":122,"bottom":27,"pngfb":false,"pr":{"l":"Lib","i":2107}}}],"shapemaskId":"","xPos":137,"yPos":120,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":63.5,"rotateYPos":17.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":122,"bottom":27,"altText":"Familie Dumbledore","pngfb":false,"pr":{"l":"Lib","i":782}},"html5data":{"xPos":0,"yPos":0,"width":122,"height":27,"strokewidth":0}},"width":127,"height":35,"resume":false,"useHandCursor":true,"id":"5kYATiEbCCN_ReviewShape"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5lElPNPmhC3_ReviewShape","id":"01","linkId":"5lElPNPmhC3_ReviewShape","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":111,"bottom":24,"pngfb":false,"pr":{"l":"Lib","i":2108}}}],"shapemaskId":"","xPos":137,"yPos":180,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":63.5,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":111,"bottom":24,"altText":"Familie Potter","pngfb":false,"pr":{"l":"Lib","i":782}},"html5data":{"xPos":0,"yPos":0,"width":111,"height":24,"strokewidth":0}},"width":127,"height":24,"resume":false,"useHandCursor":true,"id":"5lElPNPmhC3_ReviewShape"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5n5E24jzSnH_ReviewShape","id":"01","linkId":"5n5E24jzSnH_ReviewShape","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":127,"bottom":22,"pngfb":false,"pr":{"l":"Lib","i":2109}}}],"shapemaskId":"","xPos":137,"yPos":237,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":63.5,"rotateYPos":10.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":127,"bottom":22,"altText":"Bathilda Bagshot","pngfb":false,"pr":{"l":"Lib","i":782}},"html5data":{"xPos":0,"yPos":0,"width":127,"height":22,"strokewidth":0}},"width":127,"height":21,"resume":false,"useHandCursor":true,"id":"5n5E24jzSnH_ReviewShape"}],"shapemaskId":"","xPos":195,"yPos":140,"tabIndex":3,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":165,"rotateYPos":196.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":0,"yPos":0,"width":330,"height":393,"strokewidth":0}},"width":330,"height":393,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":330,"bottom":393,"altText":"Dropdown-Sequenz","pngfb":false,"pr":{"l":"Lib","i":2098}}},"id":"5ig968xsNBq"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6jSC92TuSPt_553333531","id":"01","linkId":"txt__default_6jSC92TuSPt","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":636,"bottom":60,"pngfb":false,"pr":{"l":"Lib","i":2110}}}],"shapemaskId":"","xPos":36,"yPos":60,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":32,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":648,"bottom":64,"altText":"Ordne die Bewohner Godric Hollows in der Reihenfolge, in der sie dort lebten. ","pngfb":false,"pr":{"l":"Lib","i":800}},"html5data":{"xPos":0,"yPos":0,"width":648,"height":64,"strokewidth":0}},"width":648,"height":64,"resume":true,"useHandCursor":true,"id":"6jSC92TuSPt"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"ondoubleclick","shapemaskId":"","xPos":683,"yPos":3,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":11.5,"rotateYPos":28,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":23,"bottom":56,"altText":"harry potter Symbol 2","pngfb":false,"pr":{"l":"Lib","i":753}},"html5data":{"xPos":0,"yPos":0,"width":23,"height":56,"strokewidth":0}},"width":23,"height":56,"resume":true,"useHandCursor":true,"id":"6WxDU2dV6M3","events":[{"kind":"ondoubleclick","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6afPxKduukt.6iYswwx4co6"}}]},{"kind":"onrollover","actions":[{"kind":"adjustvar","variable":"_parent.5e2Txe5qR5z_6FK9ZFnA5UL_showing","operator":"set","value":{"type":"property","value":"_parent.6FK9ZFnA5UL.$OnStage"}},{"kind":"store_resume_data","objRef":"_parent.6FK9ZFnA5UL","varref":"_parent.5e2Txe5qR5z_6FK9ZFnA5UL_resume"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6FK9ZFnA5UL.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.6FK9ZFnA5UL"}}]},{"kind":"set_enabled","objRef":{"type":"string","value":"_parent.6FK9ZFnA5UL"},"enabled":{"type":"boolean","value":true}}]},{"kind":"onrollout","actions":[{"kind":"restore_resume_state","objRef":"_parent.6FK9ZFnA5UL","varref":"_parent.5e2Txe5qR5z_6FK9ZFnA5UL_resume","limited":false},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.#5e2Txe5qR5z_6FK9ZFnA5UL_showing","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_parent.6FK9ZFnA5UL"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.6FK9ZFnA5UL"}}]}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6FK9ZFnA5UL_-1078652934","id":"01","linkId":"txt__default_6FK9ZFnA5UL","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":104,"bottom":27,"pngfb":false,"pr":{"l":"Lib","i":755}}}],"shapemaskId":"","xPos":584,"yPos":23,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":57,"rotateYPos":15.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":114,"bottom":31,"altText":"abbrechen","pngfb":false,"pr":{"l":"Lib","i":754}},"html5data":{"xPos":0,"yPos":0,"width":114,"height":31,"strokewidth":0}},"width":114,"height":31,"resume":true,"useHandCursor":true,"id":"6FK9ZFnA5UL"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":10,"yPos":505,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":18.5,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":38,"bottom":24,"altText":"Arrow Symbol 1","pngfb":false,"pr":{"l":"Lib","i":52}},"html5data":{"xPos":0,"yPos":0,"width":37,"height":24,"strokewidth":0}},"width":37,"height":24,"resume":true,"useHandCursor":true,"id":"6gZTz5FG0sD","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Vapz72mZgw.5oK56LDzxsp"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":671,"yPos":501,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":18.5,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":38,"bottom":24,"altText":"Arrow Symbol 1","pngfb":false,"pr":{"l":"Lib","i":51}},"html5data":{"xPos":0,"yPos":0,"width":38,"height":24,"strokewidth":0}},"width":37,"height":24,"resume":true,"useHandCursor":true,"id":"6lmcwv9jPw7","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Vapz72mZgw.6QaYwfxpX6p"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5ig968xsNBq_CorrectReview","id":"01","linkId":"5ig968xsNBq_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":393,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":757}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Richtig","pngfb":false,"pr":{"l":"Lib","i":756}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5ig968xsNBq_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5ig968xsNBq_IncorrectReview","id":"01","linkId":"5ig968xsNBq_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":388,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":759}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Falsch","pngfb":false,"pr":{"l":"Lib","i":758}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5ig968xsNBq_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');