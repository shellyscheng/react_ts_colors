import { Dispatch, MouseEventHandler } from 'react';
import Button from '../shared/button';
import ColorChangeSwatch from '../shared/color-change-swatch';
import { AdjustColorActions } from '../../lib/color-reducers';

type SavedColorProps = {
  name: string;
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onRemove?: () => void;
};

const SavedColor = ({
  name,
  hexColor,
  onClick,
  onRemove,
  dispatch,
}: SavedColorProps) => {
  return (
    <article className="flex place-content-between items-center gap-2">
      <ColorChangeSwatch
        hexColor={hexColor}
        onClick={() =>
          dispatch({ type: 'update-hex-color', payload: { hexColor } })
        }
      />
      <h3 className="whitespace-nowrap text-sm">{name}</h3>
      <Button variant="destructive" size="small" onClick={onRemove}>
        Remove
      </Button>
    </article>
  );
};

export default SavedColor;
