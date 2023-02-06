import { Avatar, Badge, Group } from "@mantine/core";

function ReceiveChip(props) {
  const avatar = (
    <Avatar alt="Avatar for badge" size={24} mr={5} src={props.img} />
  );
  return (
    <>
      <Group>
        <Badge
          sx={{ paddingLeft: 0 }}
          size="lg"
          radius="xl"
          color="indigo"
          leftSection={avatar}
        >
          {props.msg}
        </Badge>
      </Group>
      <div style={{color:'white',fontSize:'12px'}}>
      {props.name} {props.time}
      </div>
    </>
  );
}

export default ReceiveChip;
