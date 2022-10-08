const useValueAndKey = (val: unknown, key: string) => val && val !== true && `${key}-${val}`;

export default useValueAndKey;
