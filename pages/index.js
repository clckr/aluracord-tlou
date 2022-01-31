import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from "../config.json"

function Title(props) {
    console.log(props);
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals['000']};
                    font-size: 24px;
                    font-weight: 600;
                }
                `}</style>
        </>
    );
}

// Componente React
/* function HomePage() {
    //JSX
    return (
        <div>
            <GlobalStyle />
            <Title tag="h1">Boas vindas de volta!</Title>
            <h2>Discord - Alura Matrix</h2>
        </div>
    )
    export default HomePage
} */

export default function PaginaInicial() {
    // const username = 'clckr';
    const [username, setUsername] = React.useState('');
    const roteamento = useRouter();
    const showImg = username.length > 2

    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundImage: 'url(https://images5.alphacoders.com/777/thumb-1920-777106.png)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply' 
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
              opacity: 0.97
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function (event) {
                event.preventDefault();
                console.log('alguém submeteu o form');
                roteamento.push('/chat');
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px'
              }}
            >
              <Title tag="h2">Hello? Anyone? Cure for mankind here!</Title>
              <Text variant="body3" styleSheet={{ marginBottom: '20px', color: appConfig.theme.colors.neutrals[300], padding: '10px' }}>
                {appConfig.name}
              </Text>
  
              <TextField
                value={username}
                onChange={function (event) {
                  console.log('usuario digitou', event.target.value)
                  //onde tá o valor?
                  const valor = event.target.value;
                  // troca o valor da variável através do react e avisa quem precisa
                  setUsername(valor);
                }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.tlou[100],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.tlou["050"],
                  mainColorLight: appConfig.theme.colors.tlou[100],
                  mainColorStrong: appConfig.theme.colors.tlou[200],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '3px solid',
                borderColor: appConfig.theme.colors.tlou['050'],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              {showImg && <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />}
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }