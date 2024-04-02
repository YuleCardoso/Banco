var saldo = 100.5; //Float
var nome = prompt("informe seu nome: ");
var extrato = [] = "EXTRATO";
alert("olá, " + nome + ", é um prazer ter você por aqui!");

function inicio() {
			var escolha = parseInt(prompt('Selecione uma opção: 1- Saldo  2- Extrato  3- Saque 4- Deposito  5- Transferência  6- sair'));
            switch(escolha){
                case 1 :
                    senha();
                    ver_saldo();
                    break;
                case 2:
                    senha();
                    alert(extrato);
                    inicio();
                    break;
                case 3:
                    senha();
                    fazer_saque();
                    break;
                case 4:
                    fazer_deposito();
                    break;
                case 5:
                    senha();
                    fazer_transferencia();
                    break;
                case 6:
                    sair();
                    break;
                default :
                    erro();
                    break;
            }
        }

		function ver_saldo() {
			alert('Seu saldo atual é: ' + saldo);
			inicio();
		}

		function fazer_deposito() {
            do{
                var deposito = parseFloat(prompt('Qual o valor para depósito?'));
                if (isNaN(deposito)) {
                    alert('Por favor, informe um número:');
                }else if(deposito <= 0)
                    alert("informe um valor positivo maior que 0");
            }while(isNaN(deposito) || deposito <= 0)
			saldo += deposito;
            extrato += "\t+" + deposito + "R$ - depositado";
			ver_saldo();

		}

		function fazer_saque() {
            do{
                var saque = parseFloat(prompt('Qual o valor para saque?'));
                if (isNaN(saque)) {
                    alert('Por favor, informe um número:');
                }else if(saque <= 0)
                    alert("informe um valor positivo maior que 0");
                else if(saque > saldo)
                    alert("voce não possui saldo suficiente para esse saque");
            }while(isNaN(saque) || saque <= 0 || saque > saldo)
            saldo -= saque;
            extrato += "\t-" + saque + "R$ - sacado";
			ver_saldo();
			}

		function erro() {
			alert('Por favor, informe um número entre 1 e 6');
			inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
                alert(nome + ", foi um prazer ter você aqui")
				window.close();
			} else {
				inicio();
			}
		}

		function fazer_transferencia(){
            var conta = 0;
            do{
                conta = parseInt(prompt("para qual conta deseja transferir?"))
                if (isNaN(conta))
                    alert('Por favor, informe a conta somente com números:');
            }while(isNaN(conta))
            do{
                var transferir = parseFloat(prompt('Qual o valor que deseja transferir?'));
                if (isNaN(transferir)) {
                    alert('Por favor, informe um número:');
                }else if(transferir <= 0)
                    alert("informe um valor positivo maior que 0");
                else if(transferir > saldo)
                    alert("voce não possui saldo suficiente para essa transferencia");
            }while(isNaN(transferir) || transferir <= 0 || transferir > saldo);
            saldo -= transferir;
            extrato += "\t-" + transferir + "R$ - transferido";
            alert(transferir + "R$ foram transferidos para a conta " + conta);
			ver_saldo();
        }

        function senha(){
            var senhas = 0;
            var confirmar;
            do{
                senhas = parseInt(prompt("adicione a sua senha:"));
                if(isNaN(senhas))
                    alert("A senha é númerica");
                else if(senhas.toString().length > 4)
                    alert("A senha possui 4 dígitos")
            }while(isNaN(senhas) || senhas.toString().lenght > 4)
            if(senhas != 3589){
                confirmar = confirm("senha inválida deseja tentar novamente?")
                if(confirmar)
                    senha();
                else
                    inicio();
            }else{
                alert("senha correta");
            }
        }
		
		inicio();
