/***********************
 * Adobe Edge Animate Composition Actions
 *
 * Edit this file with caution, being careful to preserve
 * function signatures and comments starting with 'Edge' to maintain the
 * ability to interact with these actions from within Adobe Edge Animate
 *
 ***********************/
(function($, Edge, compId) {
   var Composition = Edge.Composition,
      Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("cosmos").stop('anfang');
      
      });
      
      navigationDisabled = false;
      
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         $('video').prop('preload', 'none');

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         $('video').prop('preload', 'none');

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //Edge symbol: 'cosmos'
   (function(symbolName) {
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.stop();
         
         // Play a video track 
         sym.getSymbol("Haus_Steinbock2").$("steinbock")[0].play();
         sym.getSymbol("Haus_Steinbock2").play();
         
         

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${cosmos_neu}", "click", function(sym, e) {
         if (navigationDisabled) return;
         
         sym.$("sternenGruppe").css({
            'pointer-events': 'auto'
         });
         
         sym.stop("anfang2");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         sym.stop();
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.stop();
         sym.getSymbol("Haus_Waage").play();

      });
      //Edge binding end
      
      
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${perinthia_headline}", "click", function(sym, e) {
         sym.play('anfang');
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         sterneAktiviert = true;
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${perinthia_text}", "click", function(sym, e) {
         sym.play('text');
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${ButtonStart}", "click", function(sym, e) {
         if (sym.getPosition() <= 0) {
            sym.play('text');
         } else {
            sym.play('anfang2');
         }

      });
      //Edge binding end
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.stop();
      });
      //Edge binding end
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38500, function(sym, e) {
         sym.stop();
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${sterne_pudding}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play("pudding");
         sym.getParentSymbol().getSymbolElement().animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${sterne_plateau}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play('plateau');
         sym.getParentSymbol().getSymbolElement().animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${sterne_hochhaus}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play("hochhaus");
         sym.getParentSymbol().getSymbolElement().animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000);

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${sterne_widder}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play('widder');
         sym.getParentSymbol().getSymbolElement().animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${sterne_krebs}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play('krebs');
      
         sym.getParentSymbol().getSymbolElement().animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${sterne_pool}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play('poolhouse');
         sym.getParentSymbol().getSymbolElement().animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${sterne_zwilling}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play("zwilling");
         sym.getParentSymbol().getSymbolElement().animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${sterne_steinbock}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play("steinbock");
         sym.getParentSymbol().getSymbolElement().animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000);

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${sterne_waage}", "click", function(sym, e) {
         sym.$("sternenGruppe").css({
            'pointer-events': 'none'
         });
         sym.play('waage');
         sym.getParentSymbol().getSymbolElement().animate({
            scrollTop: 0,
            scrollLeft: 0
         }, 2000);
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.stop();
         sym.$('cosmos_neu').hide();
         sym.getSymbol("Haus_Pudding").$("pudding1")[0].play();
         
         navigationDisabled = true;

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24000, function(sym, e) {
         sym.stop();
         console.log('starting hochhaus');
         // Play a video track 
         sym.getSymbol("Haus_Hochaus2").$("hochhaus")[0].play();
         
         sym.getSymbol("Haus_Hochaus2").play();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27000, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         sym.stop()
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("cosmos");
   //Edge symbol end:'cosmos'

   //=========================================================
   
   //Edge symbol: 'Haus_Krebs'
   (function(symbolName) {   
   
   })("Haus_Krebs");
   //Edge symbol end:'Haus_Krebs'

   //=========================================================
   
   //Edge symbol: 'Haus_Zwilling'
   (function(symbolName) {   
   
   })("Haus_Zwilling");
   //Edge symbol end:'Haus_Zwilling'

   //=========================================================
   
   //Edge symbol: 'Haus_Widder'
   (function(symbolName) {   
   
   })("Haus_Widder");
   //Edge symbol end:'Haus_Widder'

   //=========================================================
   
   //Edge symbol: 'Haus_Waage'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${vogelflug_small}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("vogel");
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 100, function(sym, e) {
         console.log('playing bird');

      });
      //Edge binding end

   })("Haus_Waage");
   //Edge symbol end:'Haus_Waage'

   //=========================================================
   
   //Edge symbol: 'Haus_Pudding'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pudding1}", "click", function(sym, e) {
         sym.$("pudding2").show();
         sym.$("pudding2")[0].play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pudding2}", "click", function(sym, e) {
         navigationDisabled = false
         
         sym.getComposition().getStage().getSymbol('cosmos').$("cosmos_neu").show();
         sym.getComposition().getStage().getSymbol('cosmos').$("cosmos_neu").click();
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("cosmos").stop('anfang2');
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("cosmos").$("sternenGruppe").css({
            'pointer-events': 'auto'
         });
         
         // Hide an element 
         sym.$("pudding2").hide();
         
         navigationDisabled = false;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         // Play a video track 
         console.log('playing pdduing');
         sym.$("pudding1")[0].play();

      });
      //Edge binding end

   })("Haus_Pudding");
   //Edge symbol end:'Haus_Pudding'

   //=========================================================
   
   //Edge symbol: 'Haus_Pool'
   (function(symbolName) {   
   
   })("Haus_Pool");
   //Edge symbol end:'Haus_Pool'

   //=========================================================
   
   //Edge symbol: 'Haus_Plateau'
   (function(symbolName) {   
   
   })("Haus_Plateau");
   //Edge symbol end:'Haus_Plateau'

   //=========================================================
   
   //Edge symbol: 'Haus_Pudding_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
         //Edge binding end

      

      })("Haus_Steinbock2");
   //Edge symbol end:'Haus_Steinbock2'

   //=========================================================
   
   //Edge symbol: 'Haus_Steinbock2_1'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
            //Edge binding end
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // Play a video track 
         console.log('starting video');
         
         // Play a video track 
         sym.$("hochhaus")[0].play();

      });
      //Edge binding end
      
      

         })("Haus_Hochaus2");
   //Edge symbol end:'Haus_Hochaus2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "Eric");
