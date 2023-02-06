import { Avatar, Badge, Group } from "@mantine/core";

function SendChip(props) {
  const avatar = (
    <Avatar alt="Avatar for badge" size={24} mr={5} src={props.img} />
  );
  return (
    <div dir='rtl'>
      <Group>
        <Badge
          sx={{ paddingRight: 0 }}
          size="lg"
          radius="xl"
          color="teal"
          leftSection={avatar}
        >
          {props.msg}
        </Badge>
      </Group>
      <div style={{color:'white',fontSize:'12px'}}>
      {props.name} {props.time}
      </div>
    </div>
  );
}

export default SendChip;
