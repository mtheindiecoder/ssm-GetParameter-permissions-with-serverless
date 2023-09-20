import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm"; // ES Modules import

export const displayParameter = async () => {
  const client = new SSMClient();
  const input = {
    Name: "/test/theindiecoder/apikey",
    WithDecryption: true,
  };
  const command = new GetParameterCommand(input);
  const response = await client.send(command);
  console.log(response.Parameter);
};
