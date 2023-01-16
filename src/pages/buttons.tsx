import { Button } from '@/elements/Button';

export default function ButtonPage() {
  return (
    <div className="my-auto flex h-screen flex-col items-center justify-center gap-6">
      {/* DEFAULT BUTTON */}
      <div className="flex w-[614px] flex-col items-center rounded-lg px-6 ring-2">
        <h6 className="">DEFAULT Buttons</h6>
        <div className="flex-1 flex-row">
          <Button
            variant="DEFAULT"
            onClick={e => console.log(e)}
            size="XS"
            color="DEFAULT"
          >
            XS
          </Button>
          <Button
            variant="DEFAULT"
            onClick={e => console.log(e)}
            size="SM"
            color="ERROR"
          >
            SM
          </Button>
          <Button
            variant="DEFAULT"
            onClick={e => console.log(e)}
            size="DEFAULT"
            color="INFO"
          >
            BASE
          </Button>
          <Button
            variant="DEFAULT"
            onClick={e => console.log(e)}
            size="LG"
            color="NEUTRAL"
          >
            LG
          </Button>
          <Button
            variant="DEFAULT"
            onClick={e => console.log(e)}
            size="XL"
            color="SUCCESS"
          >
            XL
          </Button>
          <Button
            variant="DEFAULT"
            onClick={e => console.log(e)}
            size="XL"
            color="WARN"
          >
            XL
          </Button>
        </div>
      </div>

      {/* ROUNDED BUTTONS / PILLS */}

      <div className="flex w-[614px] flex-col items-center rounded-lg px-6 ring-2">
        <h6 className="">Rounded Buttons</h6>
        <div className="flex-1 flex-row">
          <Button
            variant="ROUNDED"
            onClick={e => console.log(e)}
            size="XS"
            color="DEFAULT"
          >
            XS
          </Button>
          <Button
            variant="ROUNDED"
            onClick={e => console.log(e)}
            size="SM"
            color="ERROR"
          >
            SM
          </Button>
          <Button
            variant="ROUNDED"
            onClick={e => console.log(e)}
            size="DEFAULT"
            color="INFO"
          >
            BASE
          </Button>
          <Button
            variant="ROUNDED"
            onClick={e => console.log(e)}
            size="LG"
            color="NEUTRAL"
          >
            LARGE
          </Button>
          <Button
            variant="ROUNDED"
            onClick={e => console.log(e)}
            size="XL"
            color="SUCCESS"
          >
            XL
          </Button>
          <Button
            variant="ROUNDED"
            onClick={e => console.log(e)}
            size="XL"
            color="WARN"
          >
            XL
          </Button>
        </div>
      </div>

      {/* TEXT BUTTONS */}
      <div className="flex w-[614px] flex-col items-center rounded-lg px-6 ring-2">
        <h6 className="">Text Buttons</h6>
        <div className="flex-1 flex-row">
          <Button
            variant="TEXT"
            onClick={e => console.log(e)}
            size="XS"
            color="DEFAULT"
          >
            XS
          </Button>
          <Button
            variant="TEXT"
            onClick={e => console.log(e)}
            size="SM"
            color="ERROR"
          >
            SM
          </Button>
          <Button
            variant="TEXT"
            onClick={e => console.log(e)}
            size="DEFAULT"
            color="INFO"
          >
            BASE
          </Button>
          <Button
            variant="TEXT"
            onClick={e => console.log(e)}
            size="LG"
            color="NEUTRAL"
          >
            LG
          </Button>
          <Button
            variant="TEXT"
            onClick={e => console.log(e)}
            size="XL"
            color="SUCCESS"
          >
            XL
          </Button>
          <Button
            variant="TEXT"
            onClick={e => console.log(e)}
            size="XL"
            color="WARN"
          >
            XL
          </Button>
        </div>
      </div>

      {/* OUTLINE BUTTONS */}
      <div className="flex w-[614px] flex-col items-center rounded-lg px-2 ring-2">
        <h6 className="mt-2">Outline Buttons</h6>

        <div className="flex-1 flex-row ">
          <Button
            variant="OUTLINE"
            onClick={e => console.log(e)}
            color="DEFAULT"
            size="XS"
          >
            DEFAULT
          </Button>
          <Button
            variant="OUTLINE"
            color="ERROR"
            onClick={e => console.log(e)}
            size="SM"
          >
            ERROR
          </Button>
          <Button
            variant="OUTLINE"
            color="INFO"
            onClick={e => console.log(e)}
            size="DEFAULT"
          >
            INFO
          </Button>
          <Button
            variant="OUTLINE"
            color="SUCCESS"
            onClick={e => console.log(e)}
            size="LG"
          >
            SUCCESS
          </Button>
          <Button
            variant="OUTLINE"
            color="NEUTRAL"
            onClick={e => console.log(e)}
            size="XL"
          >
            NEUTRAL
          </Button>
          <Button
            variant="OUTLINE"
            color="WARN"
            onClick={e => console.log(e)}
            size="XL"
          >
            WARN
          </Button>
        </div>
      </div>
    </div>
  );
}
