import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      bg="green.700"
      h={14}
      rounded="sm"
      _pressed={{ bg: "green.500" }}
      {...rest}
    >
      <Heading fontSize="sm" color="white">
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}