export const capitalizeHtmlTag = (text: string): string => {
  return text ? text.replace(/<\/?[^>]+(>|$)/g, '') : '';
}
