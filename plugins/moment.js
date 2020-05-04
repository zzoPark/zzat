import moment from "moment/moment"

export default ({ req }, inject) => {
  const getBrowserLocale = () => {
    let locale
    if (process.server) locale = req.headers["accept-language"]
    else locale = navigator.language
    return locale ? locale.substring(0, 2) : "en"
  }

  moment.defaultFormat = "YYYY-MM-DD HH:mm:ss"
  moment.defaultFormatUtc = "YYYY-MM-DD HH:mm:ss"
  moment.locale(getBrowserLocale())
  inject("moment", moment)
  inject("formatDate", (dt) => moment(dt).format())
}
