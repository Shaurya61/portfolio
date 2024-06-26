import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { FC } from 'react';

interface ContactEmailProps {
  fullname: string;
  email: string;
  subject: string;
  message: string;
}

const baseUrl = `${process.env.BASE_URL}` ;

export const ContactEmail: FC<ContactEmailProps> = ({
  fullname,
  email,
  subject,
  message,
}) => {
  const messageArray = message.split('\n');

  return (
    <Html>
      <Head>
        <title>{`Message from ${fullname}`}</title>
      </Head>
      <Preview>Message from {fullname}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Column>
              <Img
                src='/avatar.png' // Update to your avatar image path
                width='50'
                height='50'
                alt='Avatar'
                style={icon}
              />
            </Column>
            <Column align='right'>
              <Link style={headingLink} href={baseUrl}>
                Shauryanayyar.dev
              </Link>
            </Column>
          </Section>

          <Section style={box}>
            <Hr style={hr} />
            <Heading as='h2' style={{ color: 'white', textAlign: 'center' }}>
              {subject}
            </Heading>
            <Hr style={hrTransparent} />

            {messageArray.map((line, index) => (
              <Text key={index} style={text}>
                {line ? line : '\u00A0'}
              </Text>
            ))}

            <Hr style={hrTransparent} />
            <Text style={text}>{fullname}</Text>
            <Link style={{ ...text, ...anchor }} href={`mailto:${email}`}>
              {email}
            </Link>
            <Hr style={hr} />
          </Section>

          <Section style={box}>
            <Column>
              <Text style={footer}>Follow me on: </Text>
            </Column>
            <Column align='right'>
              <Link
                style={{ ...footer, ...anchor }}
                href='https://github.com/Shaurya61'
              >
                GitHub,
              </Link>{' '}
              <Link
                style={{ ...footer, ...anchor }}
                href='https://www.linkedin.com/in/shaurya8555'
              >
                LinkedIn,
              </Link>{' '}
              <Link
                style={{ ...footer, ...anchor }}
                href='https://x.com/Shaurya35804973'
              >
                Twitter,
              </Link>{' '}
            </Column>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;

const main = {
  backgroundColor: '#000',
  fontFamily: 'Georgia, serif',
  padding: '60px 0',
};

const icon = {
  border: '2px solid #82E6BC',
  borderRadius: '100%',
  padding: '1px',
};

const container = {
  backgroundColor: '#1b1c20',
  margin: '0 auto',
  padding: '20px 0 48px',
  borderRadius: '12px',
  boxShadow: '0 0 6px 0 #82E6BC',
};

const box = {
  padding: '0 48px',
};

const hr = {
  borderColor: '#82e6bc7d',
  margin: '20px 0',
};

const hrTransparent = {
  borderColor: 'transparent',
  margin: '20px 0',
};

const headingLink = {
  fontSize: '18px',
  lineHeight: '24px',
  color: '#82E6BC',
};

const text = {
  color: '#fff',
  fontSize: '16px',
  lineHeight: '24px',
  margin: 0,
  textAlign: 'left' as const,
};

const anchor = {
  color: '#82E6BC',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  margin: 0,
};
