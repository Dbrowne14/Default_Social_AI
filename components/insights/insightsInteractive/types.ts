export type ActiveFilterProps = {
  isActive: string;
};

export type ActiveFilterSetterProps = {
  isActive: string;
  setIsActive: React.Dispatch<React.SetStateAction<string>>;
};

export type BlogStateProps = ActiveFilterProps & {
  showMore: number;
}