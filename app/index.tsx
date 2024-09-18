import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export default function Index() {

  return (
    
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#8b03bb',
        height: '100%'
      }}
      >
      <View> 
        <Text style={{
          width: 400,
          alignItems: 'left',
          marginTop: 100,
          marginBottom: 30, 
          color: '#fff'
        }}>Olá, Hericle
        </Text>

        <TouchableOpacity style={{
          marginBottom: 30,
          padding: 15,
          borderWidth: 1,
          borderRadius: 15,
        }}>
          <Text style={{
            textAlign: 'Left',
          }}>Procurar...</Text>
        </TouchableOpacity>

      </View>

      <View style={{
        padding: 30,
        backgroundColor: '#fff',
        width: 400,
        borderRadius: 20,
      }}>

        <Text style={{
          textAlign: 'left',
        }}
        >Cartão de crédito
        </Text>
        <Text style={{
          textAlign: 'left',
          marginBottom: 10,
        }}>Fatura</Text>

        <Text style={{
          marginBottom: 10,
          color: '#0099cc'
        }
        }>R$ 1.500,00</Text>

        <TouchableOpacity>
          <Text style={{
            backgroundColor: '#fff',
            borderWidth: 1,
            borderRadius: 20,
            textAlign: 'center',
            padding: 5,
          }}
          >Pagar Fatura</Text>
        </TouchableOpacity>
        </View>

      <View style={{
        backgroundColor: '#fff',
        padding: 30,
        marginTop: 30,
        width: 400,
        borderRadius: 20,
      }}>
        <Text>Conta</Text>

        <Text style={{
          marginBottom: 10,
        }
        }>Saldo Disponível</Text>

        <Text style={{
          marginBottom: 10,
        }
        }>R$ 300,00</Text>

        <TouchableOpacity>
          <Text style={{
            backgroundColor: '#fff',
            borderWidth: 1,
            borderRadius: 20,
            textAlign: 'center',
            padding: 5,
          }}>Transferir</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        marginTop: 30,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 20,
        borderWidth: 1,
        width: 400
      }}>
        <TouchableOpacity>
          <Text style={{
            color: '#0099cc',
            textAlign: 'center',
          }}>Meus Cartões</Text>
        </TouchableOpacity>
      </View>

    </View>
  );

}
