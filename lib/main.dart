import 'package:flutter/material.dart';

void main() {
  runApp(BankingApp());
}

class BankingApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Aplicação Bancária',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Aplicação Bancária'),
      ),
      body: ListView(
        children: const <Widget>[
          Padding(
            padding: EdgeInsets.all(8.0),
            child: Card(
              elevation: 4,
              child: ListTile(
                leading: Icon(Icons.account_balance_wallet, size: 50),
                title: Text('Conta Corrente'),
                subtitle: Text('Saldo: R\$ 2.500,00'),
                trailing: Icon(Icons.arrow_forward_ios),
              ),
            ),
          ),
          Padding(
            padding: EdgeInsets.all(8.0),
            child: Card(
              elevation: 4,
              child: ListTile(
                leading: Icon(Icons.savings, size: 50),
                title: Text('Poupança'),
                subtitle: Text('Saldo: R\$ 1.000,00'),
                trailing: Icon(Icons.arrow_forward_ios),
              ),
            ),
          ),
          Padding(
            padding: EdgeInsets.all(8.0),
            child: Card(
              elevation: 4,
              child: ListTile(
                leading: Icon(Icons.credit_card, size: 50),
                title: Text('Cartão de Crédito'),
                subtitle: Text('Fatura: R\$ 900,00'),
                trailing: Icon(Icons.arrow_forward_ios),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
