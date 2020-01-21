   const q = ['Cuando te diriges a las personas usas palabras:', '¿Con cuál de éstas palabras te identificas más?', 'Los contenido más comunes en tus temas de conversación son:', 'Cuando entablas una relación interpresonal tu comunicación tiene un estilo:', 'Te caracterizas por ser una persona:', '¿Con cuál de éstas descripciones te identificas más?', 'En conversaciones tu energía vocal es:', 'Tu velocidad al hablar es:', 'Tu expresión facil común es:', 'En el escenario de ventas, su mayor fotaleza es:', 'En actividades cotidianas te caracterizas por:', '¿Qué actitud asumes frente a los errores de los otros?', 'De tu partitcipación en un grupo, por lo general te interesa obtener:', 'Por lo general tu estado de animo es:', 'En tu casa o en la oficina eres:', 'Tu energía la orientas fundamentalmente en la vida a:', '¿Qué actitudes asumes en situaciones de conflicto?', 'En la negociación:', 'Cuando tomas decisiones te motiva:', 'En la negociación:', ];

        const rsr = ['Escogidas, abstractas, complicadas, utilizas oraciones largas.', 'Disciplinado.', 'Estadísticas, aspectos técnicos, tecnología, detalles y curiosidades.', 'Concreto y especializado, cuidadoso del estilo y confiabilidad de la información.', 'Controlas tus movimientos, quieres que sean perfectos y equilibrados. Extrema rigidez.', 'Perfeccionista. Todo tiene que estar en su lugar.', 'Lineal con tendencia a la pronunciación acentuada y seca.', 'Moderada, pausada.', 'Calmada, fija y sin expresiones evidentes. Imperturbable a veces.', 'Preparar la estrategia para lograr la reunión, la venta o la negociación.', 'Ser más bien metódico, calmado y muy ordenado.', 'Corriges, sufres mucho, piensas que es falta de precisión.', 'Conocimiento y sabiduría. Una conversación intelectual.', 'Calmado, tenso, imperturbable, prefieres estar solo.', 'Eres extremadamente metódico, ordenado, detallista y cuidadoso.', 'En lograr tus metas principalmente en el campo del conocimiento y perfección.', 'Eres racional y calculador, escondes y manejas tus emociones. Inflexible con tus reglas.', 'Analizas.', 'La información que posees.', 'Te gusta demostrar que tienes la razón.' ];

        const rg = ['Impositivas, acusadoras, de reclamo.', 'Independiente.', 'De poder, influencia, control.', 'Directo, concreto y orientado hacía el control. Las cosas son blancas o negras.', 'Erguida, rápida y tensa, a veces rígida corporalmente.', 'Osado-Osada. Tomas riesgos basado en instintos. Eres Impulsivo-impulsiva.', 'Alto, intenso avasallante a veces, duro y tenso. Algunos dicen que eres gritón.', 'Rápida y tajante.', 'Dura y seria, entrecejo fruncido, a veces dientes apretados y mirada fija.', 'La acción: visitar clientes, llamadas telefónicas, cerrar el negocio.', 'Querer todo a la vez.', 'Poco tolerante, acusa inmediatamente. Los hechos son hechos.', 'Influencias, contactos importantes. Hay objetivos detrás de las cosas que haces.', 'Explosivo, ansioso, tenso, invasivo.', 'Organizado, rápido, no te gusta perder el tiempo.', 'Lograr tus metas, lo que te has propuesto. Alcanzar el poder.', 'Explosivo, atacas y defiendes apasionadamente tus opiniones. Te cuesta admitir equivocaciones. Frecuentemente no dejas hablar y a veces no escuchas.', 'Presionas.', 'Lograr tu resultado final.', 'Te gusta tener el control.' ];

        const ra = ['De cortesía, educadas, simpaticas, neutras.', 'Pacífico.', 'Anecdotas historias familiares, amistad.', 'A ratos poco concreto, muy explicativo y cuidadoso, orientado a no dañar al otro.', 'Movimientos lentos y poca gesticulación, el cuerpo protege a la persona.', 'Comprensivo-Comprensiva. Entiendes los problemas de los demás.', 'Bajo y monótono (Poca modulación).', 'Lenta con ritmo caracteristico.', 'Relajada y sonriente, muchas expresiones de empatía, cariño, etc.', 'Desarrollar relaciones, caerle bien al cliente.', 'Ser más bien lento, no funcionas con precisión o te cuesta concentrarte.', 'Corriges evitando hacerlo sentir mal. Te involucras aunque tengas que hacer sacrificios.', 'Amistades y sinceridad.', 'Calmado, buena disposición.', 'Poco ordenado, aunque puedes mejorarlo, siempre serás despreocupado.', 'En ser feliz, aceptado y querido.', 'Evitas las confrontaciones y las situaciones tensas. Sabes ceder y quedar amigos.', 'Concilias.', 'La amistad, el sentimiento.', 'Te gusta sentirte bien.' ];

        const rm = ['Jocosas, confiadas. A veces sin sentido o relación.', 'Divertido.', 'De chistes, actividades amenas, lo que serás en el futuro, las cosas que sabes hacer.', 'A veces vago, original, ocurrente. Orientado a ser el centro de atención.', 'Mucho movimiento, gesticulaciones y expresión facial abundante.', 'Simpático-Simpática. Te invitan a fiestas y reuniones, te gusta la fiesta.', 'Alto con modulaciones variadas. Tu ánimo la influyen a menudo.', 'Rápida.', 'Relajada, sonriente, muchas muecas y buen contacto visual.', 'Descubrir nuevas formas de lograr más ventas, mantener una actitud positiva.', 'Ser ansioso, muy rápido, poco ordenado y te aburres con facilidad.', 'Haces frecuentemente caso omiso y tomas en cuenta a la persona y su esfuerzo personal.', 'Ser conocido, reconocimiento a tus méritos. Proyectarte.', 'Impulsivo, explosivo, alegre, irreverente.', 'Poco ordenado, creativo, te gusta pasar de un tema a otro cuando deja de ser novedoso.', 'Quedar bien ante la gente, lograr ser reconocido y admirado.', 'Puedes estallar y por lo general te vas por la tangente sin embargo, eres bueno escuchando cuando te lo propones y puedes negociar.', 'Enfrías situaciones.', 'Tu olfato/intuición.', 'Te gusta sobresalir.' ];

        for (var i = 1; i <= 20; i++) {
            
            var quest= '<div class="carousel-item" id="question' + i + '"><div class="card"><div class="card-header"><h3>Test</h3></div><div class="card-body" ><div class="progress mx-auto"><div class="progress-bar" id="progress-bar' + i + '" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div></div><br><h5 class="card-title">' + q[i-1] + '</h5></div></div>';
        
                $('.carousel-inner').append(quest);
                $('#progress-bar' + i).css('width', (i*5) +'%');
                $('#progress-bar' + i).attr('aria-valuenow', (i*5));
                $('#progress-bar' + i).text((i*5)+'%');



                $('#question1').addClass("active");
        
        }

        function pregunta(quiz,random){ //Quiz es la iteración, random el numero aleatorio
            switch (random){
              case 1: 
                return rg[quiz];
              break;
              case 2: 
                return ra[quiz];
              break;
              case 3: 
                return rsr[quiz];
              break;
              case 4: 
                return rm[quiz];
              break;
              default: 
                alert('ERROR');
              break;
            }

        }
        for (var i = 1; i <= 20; i++) {
            var a = $('#question' + i + ' .card-body');
            var aleatorio1 = (Math.random()*(4-1)+1);
            aleatorio1 = Math.round(aleatorio1);

            var q1 = '<div class="custom-control custom-radio  mt-3" id="radio' + i + '' + aleatorio1 + '"><input type="radio" class="custom-control-input"  id="q[' + i + '' + aleatorio1 + ']" name="q[' + i + ']" value="' + aleatorio1 + '"><label class="custom-control-label"  for="q[' + i + '' + aleatorio1 + ']">'+ pregunta(i-1,aleatorio1) +'</label></div></div>';
            a.append(q1);

            var aleatorio2 = (Math.random()*(4-1)+1);
            aleatorio2 = Math.round(aleatorio2);
            while (aleatorio2 == aleatorio1) {
              aleatorio2 = (Math.random()*(4-1)+1);
              aleatorio2 = Math.round(aleatorio2);
            }
            a.append('<div class="custom-control custom-radio  mt-3" id="radio' + i + '' +  aleatorio2 +'"><input type="radio" class="custom-control-input"  id="q[' + i + '' + aleatorio2 + ']" name="q[' + i + ']" value="' + aleatorio2 + '"><label class="custom-control-label"  for="q[' + i + '' + aleatorio2 + ']">'+pregunta(i-1,aleatorio2)+'</label></div></div>');

            var aleatorio3 = (Math.random()*(4-1)+1);
            aleatorio3 = Math.round(aleatorio3);
            while ((aleatorio3 == aleatorio1) || (aleatorio3 == aleatorio2)) {
              aleatorio3 = (Math.random()*(4-1)+1);
              aleatorio3 = Math.round(aleatorio3);
            }

            a.append('<div class="custom-control custom-radio  mt-3" id="radio' + i + '' + aleatorio3 +'"><input type="radio"class="custom-control-input"id="q[' + i + '' + aleatorio3 + ']"name="q[' + i + ']" value="' + aleatorio3 + '"><label class="custom-control-label"  for="q[' + i + '' + aleatorio3 + ']">'+pregunta(i-1,aleatorio3)+'</label></div></div>');
            

            var aleatorio4 = (Math.random()*(4-1)+1);
            aleatorio4 = Math.round(aleatorio4);
            while ((aleatorio4 == aleatorio1) || (aleatorio4 == aleatorio2) || (aleatorio4 == aleatorio3)) {
              aleatorio4 = (Math.random()*(4-1)+1);
              aleatorio4 = Math.round(aleatorio4);

            }

              a.append('<div class="custom-control custom-radio  mt-3" id="radio' + i + '' + aleatorio4 + '"><input type="radio" class="custom-control-input"  id="q[' + i + '' + aleatorio4 + ']" name="q[' + i + ']" value="' + aleatorio4 + '"><label class="custom-control-label"  for="q[' + i + '' + aleatorio4 + ']">'+pregunta(i-1,aleatorio4)+'</label></div></div> <a class="btn btn-primary mr-5 mt-5" id="prev' + i + '" href="#carouselExampleControls" role="button" data-slide="prev" ><span>Anterior</span></a><a class="btn btn-primary mt-5" id="next' + i + '" href="#carouselExampleControls" role="button" data-slide="next" ><span>Siguiente</span></a>');

             
        }


        $(".card-body #prev1").remove();

         $(".card-body > #next20").remove();

         $("#question20 > .card > .card-body").append('<button class="btn btn-primary mt-5" id="submit" onclick="result()" >Ver resultados</button>'); 

          var contador = [0,0,0,0];
          var arquetipos = [];
          var guerrero;
          var amante;
          var sabioRey;
          var mago;

        function extra(a) {
              var condition1 = document.getElementById('q[' + 21 + '1]').checked;
              var condition2 = document.getElementById('q[' + 21 + '2]').checked;
              var condition3 = document.getElementById('q[' + 21 + '3]').checked;
              var condition4 = document.getElementById('q[' + 21 + '4]').checked;
              if (condition1) {
                for (var i = 0; i <= 3; i++) {
                  if (a[i].id == 1) {
                  
                  arquetipos[i].result +=1;
                  } 
                }
              }
              else if (condition2) {  
                for (var i = 0; i <= 3; i++) {
                  if (a[i].id == 2) {
                    arquetipos[i].result +=1;
                  } 
                }
              }
              else if (condition3) {
                for (var i = 0; i <= 3; i++) {
                  if (a[i].id == 3) {
                    arquetipos[i].result +=1;
                  } 
                }
              }
              else if (condition4) {
                  for (var i = 0; i <= 3; i++) {
                  if (a[i].id == 4) {
                    arquetipos[i].result +=1;
                  } 
                }
              }

              arquetipos.sort(function(a,b) {
            return a.result-b.result;
           });
              arquetipos.reverse();

            for (var i = 0; i <= 3; i++) {
              arquetipos[i].porcentaje = (contador[i] * 100) /21;
            }
        }
        

        function result() {
            for (var i = 1; i <= 20; i++) {    
              var condition1 = document.getElementById('q[' + i + '1]').checked;
              var condition2 = document.getElementById('q[' + i + '2]').checked;
              var condition3 = document.getElementById('q[' + i + '3]').checked;
              var condition4 = document.getElementById('q[' + i + '4]').checked;
              if (condition1) {
                  contador[0] +=1;
              }
              else if (condition2) {  
                  contador[1] +=1;

              }
              else if (condition3) {
                  contador[2] +=1;
              }
              else if (condition4) {
                  contador[3] +=1;
              }
           }

           



           arquetipos[0] = {'id': 1, 'result': contador[0], 'clase': 'Guerrero', 'extra': 'Si quieres salir, sales.', 'porcentaje': ''};
           arquetipos[1] = {'id': 2, 'result': contador[1], 'clase': 'Amante', 'extra': 'Te importa quienes van.', 'porcentaje': ''};
           arquetipos[2] = {'id': 3, 'result': contador[2], 'clase': 'Sabio Rey', 'extra': 'Organizas los planes, horarios, lugares y personas.', 'porcentaje': ''};
           arquetipos[3] = {'id': 4, 'result': contador[3], 'clase': 'Mago', 'extra': 'Lo importante es divertirse y destacar.', 'porcentaje': ''}; 

           arquetipos.sort(function(a,b) {
            return a.result-b.result;
           });

           arquetipos.reverse();

           var casos = [arquetipos[0].result, arquetipos[1].result, arquetipos[2].result, arquetipos[3].result];

           if (casos[0] == casos[3]) { 

              $('.carousel-inner').append( '<div class="carousel-item" id="question' + 21 + '"><div class="card"><div class="card-header"><h3>Test</h3></div><div class="card-body" ><div class="progress mx-auto"><div class="progress-bar bg-warning" id="progress-bar' + 21 + '" role="progressbar" style="width: 100%" aria-valuenow="Pregunta final" aria-valuemin="0" aria-valuemax="100">Extra</div></div><br><h5 class="card-title">' + 'Al salir con personas:' + '</h5><div class="custom-control custom-radio  mt-3" id="radio' + 21 + '' + arquetipos[0].id + '"><input type="radio" class="custom-control-input"  id="q[' + 21 + '' + arquetipos[0].id + ']" name="q[' + 21 + ']" value="' + arquetipos[0].id + '"><label class="custom-control-label"  for="q[' + 21 + '' + arquetipos[0].id + ']">'+ arquetipos[0].extra +'</label></div><div class="custom-control custom-radio  mt-3" id="radio' + 21 + '' + arquetipos[3].id + '"><input type="radio" class="custom-control-input"  id="q[' + 21 + '' + arquetipos[3].id + ']" name="q[' + 21 + ']" value="' + arquetipos[3].id + '"><label class="custom-control-label"  for="q[' + 2 + '' + arquetipos[3].id + ']">'+ arquetipos[3].extra +'</label></div><div class="custom-control custom-radio  mt-3" id="radio' + 21 + '' + arquetipos[2].id + '"><input type="radio" class="custom-control-input"  id="q[' + 21 + '' + arquetipos[2].id + ']" name="q[' + 21 + ']" value="' + arquetipos[2].id + '"><label class="custom-control-label"  for="q[' + 21 + '' + arquetipos[2].id + ']">'+ arquetipos[2].extra +'</label></div><div class="custom-control custom-radio  mt-3" id="radio' + 21 + '' + arquetipos[1].id + '"><input type="radio" class="custom-control-input"  id="q[' + 21 + '' + arquetipos[1].id + ']" name="q[' + 21 + ']" value="' + arquetipos[1].id + '"><label class="custom-control-label"  for="q[' + 21 + '' + arquetipos[1].id + ']">'+ arquetipos[1].extra +'</label></div><button class="btn btn-warning mt-5" style="color: white;" onclick="extra(arquetipos)">Mostrar Resultados</button></div>');

                $('#question20').removeClass("active");
                $('#question21').addClass("active");


           }
           else if (casos[0] == casos[2]) { // Tres tienen el mayor valor
             $('.carousel-inner').append( '<div class="carousel-item" id="question' + 21 + '"><div class="card"><div class="card-header"><h3>Test</h3></div><div class="card-body" ><div class="progress mx-auto"><div class="progress-bar bg-warning" id="progress-bar' + 21 + '" role="progressbar" style="width: 100%" aria-valuenow="Pregunta final" aria-valuemin="0" aria-valuemax="100">Extra</div></div><br><h5 class="card-title">' + 'Al salir con personas:' + '</h5><div class="custom-control custom-radio  mt-3" id="radio' + 21 + '' + arquetipos[0].id + '"><input type="radio" class="custom-control-input"  id="q[' + 21 + '' + arquetipos[0].id + ']" name="q[' + 21 + ']" value="' + arquetipos[0].id + '"><label class="custom-control-label"  for="q[' + 21 + '' + arquetipos[0].id + ']">'+ arquetipos[0].extra +'</label></div><div class="custom-control custom-radio mt-3" style="display:none;" id="radio' + 21 + '' + arquetipos[3].id + '"><input type="radio" class="custom-control-input"  id="q[' + 21 + '' + arquetipos[3].id + ']" name="q[' + 21 + ']" value="' + arquetipos[3].id + '"><label class="custom-control-label"  for="q[' + 2 + '' + arquetipos[3].id + ']">'+ arquetipos[3].extra +'</label></div><div class="custom-control custom-radio  mt-3" id="radio' + 21 + '' + arquetipos[2].id + '"><input type="radio" class="custom-control-input"  id="q[' + 21 + '' + arquetipos[2].id + ']" name="q[' + 21 + ']" value="' + arquetipos[2].id + '"><label class="custom-control-label"  for="q[' + 21 + '' + arquetipos[2].id + ']">'+ arquetipos[2].extra +'</label></div><div class="custom-control custom-radio  mt-3" id="radio' + 21 + '' + arquetipos[1].id + '"><input type="radio" class="custom-control-input"  id="q[' + 21 + '' + arquetipos[1].id + ']" name="q[' + 21 + ']" value="' + arquetipos[1].id + '"><label class="custom-control-label"  for="q[' + 21 + '' + arquetipos[1].id + ']">'+ arquetipos[1].extra +'</label></div><button class="btn btn-warning mt-5" style="color: white;" onclick="extra(arquetipos)">Mostrar Resultados</button></div>');
                $('#question20').removeClass("active");
                $('#question21').addClass("active");

           }
            else if (casos[0] == casos[1]) { // Tres tienen el mayor valor
            $('.carousel-inner').append( '<div class="carousel-item" id="question' + 21 + '"><div class="card"><div class="card-header"><h3>Test</h3></div><div class="card-body" ><div class="progress mx-auto"><div class="progress-bar bg-warning" id="progress-bar' + 21 + '" role="progressbar" style="width: 100%" aria-valuenow="Pregunta final" aria-valuemin="0" aria-valuemax="100">Extra</div></div><br><h5 class="card-title">' + 'Al salir con personas:' + '</h5><div class="custom-control custom-radio  mt-3" id="radio' + 21 + '' + arquetipos[0].id + '"><input type="radio" class="custom-control-input"  id="q[' + 21 + '' + arquetipos[0].id + ']" name="q[' + 21 + ']" value="' + arquetipos[0].id + '"><label class="custom-control-label"  for="q[' + 21 + '' + arquetipos[0].id + ']">'+ arquetipos[0].extra +'</label></div><div class="custom-control custom-radio  mt-3" style="display:none;" id="radio' + 21 + '' + arquetipos[3].id + '"><input type="radio" class="custom-control-input"  id="q[' + 21 + '' + arquetipos[3].id + ']" name="q[' + 21 + ']" value="' + arquetipos[3].id + '"><label class="custom-control-label"  for="q[' + 2 + '' + arquetipos[3].id + ']">'+ arquetipos[3].extra +'</label></div><div class="custom-control custom-radio  mt-3" style="display:none;" id="radio' + 21 + '' + arquetipos[2].id + '"><input type="radio" class="custom-control-input"  id="q[' + 21 + '' + arquetipos[2].id + ']" name="q[' + 21 + ']" value="' + arquetipos[2].id + '"><label class="custom-control-label"  for="q[' + 21 + '' + arquetipos[2].id + ']">'+ arquetipos[2].extra +'</label></div><div class="custom-control custom-radio  mt-3" id="radio' + 21 + '' + arquetipos[1].id + '"><input type="radio" class="custom-control-input"  id="q[' + 21 + '' + arquetipos[1].id + ']" name="q[' + 21 + ']" value="' + arquetipos[1].id + '"><label class="custom-control-label"  for="q[' + 21 + '' + arquetipos[1].id + ']">'+ arquetipos[1].extra +'</label></div><button onclick="extra(arquetipos)" class="btn btn-warning mt-5" style="color: white;">Mostrar Resultados</button></div>');

                $('#question20').removeClass("active");
                $('#question21').addClass("active");

           }          
            
            else if (casos[0] != casos[1]) {
              for (var i = 0; i <= 3; i++) {
              arquetipos[i].porcentaje = (contador[i] * 100) /20;
            }
            }
        }


