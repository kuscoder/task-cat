import { useMemo } from 'react'
import { useTypedSelector } from 'common/store'
import { Option } from 'components/shared/Select'

// Returns memoize Option array from currencies list for Select component
export function useOptionsFromCurrenciesList(): Option[] {
   const list = useTypedSelector(state => state.currencies.list)
   const options = useMemo<Option[]>(() => list.map(currency => ({ value: currency.id, label: currency.id })), [list])
   return options
}
