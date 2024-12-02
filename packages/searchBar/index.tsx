import { View, Text, Input } from '@tarojs/components'
import { defineComponent, onMounted, ref } from 'vue'
import FilterDrawer from '../filterDrawer'
import { SearchBarProps } from './types'

export const SearchBar = defineComponent({
  name: 'searchBar',
  props: SearchBarProps,
  setup(props) {
    const keyword = ref('')
    const isEditing = ref(false)
    const filterDrawerShow = ref(false)

    onMounted(() => {
      keyword.value = props.value || ''

      isEditing.value = props.autofocus || !!keyword.value
    })

    const onInputerBlur = () => {
      if (!keyword.value) {
        isEditing.value = false
      }
    }

    const onCancel = () => {
      isEditing.value = false
      keyword.value = ''
      props.onCancel?.(keyword.value)
    }

    return () => {
      const {
        containerClass,
        placeholder,
        cancelText,
        filters,
        onSearch,
        onEnter,
        onFilterConfirm,
      } = props

      return (
        <>
          <View class={`components-search-bar ${containerClass}`}>
            <View
              class="search-controls"
              onClick={() => !isEditing.value && (isEditing.value = true)}
            >
              {!isEditing.value ? (
                <View class="search-placeholder">
                  <Text class="jmc-nut-icon jmc-nut-icon-search search-prefix-icon" />
                  <Text class="search-placeholder-text">{placeholder}</Text>
                </View>
              ) : (
                <View class="search-wrapper">
                  <Input
                    class="search-input"
                    type="text"
                    value={keyword.value}
                    focus={isEditing.value}
                    onInput={(e) => (keyword.value = e.detail.value)}
                    onBlur={onInputerBlur}
                    onConfirm={() => onEnter?.(keyword.value)}
                  />
                  <View
                    class="jmc-nut-icon jmc-nut-icon-search search-btn"
                    onClick={() => onSearch?.(keyword.value)}
                  />
                </View>
              )}
            </View>
            <View class="search-action">
              {isEditing.value && (
                <View class="search-cancel-btn" onClick={onCancel}>
                  {cancelText}
                </View>
              )}
              {!isEditing.value && !!filters && (
                <View
                  class="jmc-nut-icon jmc-nut-icon-filter filter-btn"
                  onClick={() => (filterDrawerShow.value = true)}
                />
              )}
            </View>
          </View>
          {!!filters && (
            <FilterDrawer
              v-model:visible={filterDrawerShow.value}
              filters={filters}
              onConfirm={onFilterConfirm}
            />
          )}
        </>
      )
    }
  },
})

export default SearchBar
