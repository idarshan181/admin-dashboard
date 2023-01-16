import { Button } from '@/elements/Button';

export default function Outline() {
  return (
    <>
      <Button
        variant="OUTLINE"
        onClick={e => console.log(e)}
        size="XS"
        color="DEFAULT"
      >
        Rounded
      </Button>
      <Button
        variant="OUTLINE"
        onClick={e => console.log(e)}
        size="SM"
        color="DEFAULT"
      >
        Rounded
      </Button>
      <Button
        variant="OUTLINE"
        onClick={e => console.log(e)}
        size="DEFAULT"
        color="DEFAULT"
      >
        Rounded
      </Button>
      <Button
        variant="OUTLINE"
        onClick={e => console.log(e)}
        size="LG"
        color="DEFAULT"
      >
        Rounded
      </Button>
      <Button
        variant="OUTLINE"
        onClick={e => console.log(e)}
        size="XL"
        color="DEFAULT"
      >
        Rounded
      </Button>
    </>
  );
}
