import {
  ActionIcon,
  Container,
  Group,
  ScrollArea,
  SimpleGrid,
  Stack,
  TextInput
} from "@mantine/core";
import { useState } from "react";
import ReceiveChip from "./components/massageChip/recive";
import SendChip from "./components/massageChip/send";

function App() {
  const [message, setMessage] = useState();
  const current = new Date();
  const [chatMasseage,setChatMessage] =useState( [
    {
      time: "15:18",
      image:
        "https://avatars.dicebear.com/v2/male/24f96ba3975cea0fc0291aa3148db2cd.svg",
      name: "me",
      message: "hello dude!",
      isMine: true,
    },
    {
      time: "15:15",
      image:
        "https://avatars.dicebear.com/v2/female/24f96ba3975cea0fc0291aa3148db2cd.svg",
      name: "you",
      message: "hi man",
      isMine: false,
    },
    {
      time: "15:20",
      image:
        "https://avatars.dicebear.com/v2/male/24f96ba3975cea0fc0291aa3148db2cd.svg",
      name: "me",
      message: "great",
      isMine: true,
    },
    {
      time: "15:21",
      image:
        "https://avatars.dicebear.com/v2/female/24f96ba3975cea0fc0291aa3148db2cd.svg",
      name: "you",
      message: "tnx are you fine?",
      isMine: false,
    },
    {
      time: "15:23",
      image:
        "https://avatars.dicebear.com/v2/male/24f96ba3975cea0fc0291aa3148db2cd.svg",
      name: "me",
      message: "great",
      isMine: true,
    },
    {
      time: "15:25",
      image:
        "https://avatars.dicebear.com/v2/female/24f96ba3975cea0fc0291aa3148db2cd.svg",
      name: "you",
      message: "tnx are you fine?",
      isMine: false,
    },
    {
      time: "15:26",
      image:
        "https://avatars.dicebear.com/v2/male/24f96ba3975cea0fc0291aa3148db2cd.svg",
      name: "me",
      message: "great",
      isMine: true,
    },
    {
      time: "15:28",
      image:
        "https://avatars.dicebear.com/v2/female/24f96ba3975cea0fc0291aa3148db2cd.svg",
      name: "you",
      message: "tnx are you fine?",
      isMine: false,
    },
    {
      time: "15:30",
      image:
        "https://avatars.dicebear.com/v2/male/24f96ba3975cea0fc0291aa3148db2cd.svg",
      name: "me",
      message: "great",
      isMine: true,
    },
  ])


  const handleSendMessage = () => {
    setChatMessage([...chatMasseage,{
      time: current.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      image:
        "https://avatars.dicebear.com/v2/male/24f96ba3975cea0fc0291aa3148db2cd.svg",
      name: "me",
      message: message,
      isMine: true,
    }])
    console.log('clicked')
    setMessage('');
  };

  return (
    <Container
      my="sm"
      style={{
        marginTop: "10%",
        marginLeft: "30%",
        width: "600px",
        minHeight: "500px",
      }}
    >
      <SimpleGrid
        cols={1}
        breakpoints={[{ maxWidth: "lg", cols: 1, minWidth: "200px" }]}
      >
        <Stack align="center">
          <ScrollArea
            style={{
              width: 550,
              height: 430,
              backgroundColor: "lightseagreen",
            }}
          >
            {chatMasseage.map((item) => {
              return item.isMine ? (
                <SendChip
                  key={item.time}
                  img={item.image}
                  name={item.name}
                  time={item.time}
                  msg={item.message}
                />
              ) : (
                <ReceiveChip
                  key={item.time}
                  img={item.image}
                  name={item.name}
                  time={item.time}
                  msg={item.message}
                />
              );
            })}
          </ScrollArea>
          <Group position="center">
            <TextInput
              radius="xl"
              size="lg"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              style={{ width: "600px" }}
              rightSection={
                <ActionIcon
                  size={45}
                  radius="xl"
                  color={"blue"}
                  variant="filled"
                  onClick={()=>handleSendMessage()}
                >
                  send
                </ActionIcon>
              }
              placeholder="Masseage"
              rightSectionWidth={50}
            />
          </Group>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export default App;
