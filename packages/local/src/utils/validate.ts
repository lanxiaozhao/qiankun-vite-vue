export const pwdStrength = (pwd: string) => {
  // 大小写字母数字只包含一种
  const weakReg = /^[0-9]{8,}$|^[a-z]{8,}$|^[A-Z]{8,}$/
  // 大小写字母数字包含两种
  const middleReg =
    /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/
  // 大小写字母都有
  const strongReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
  if (strongReg.test(pwd)) return 'strong'

  if (middleReg.test(pwd)) return 'middle'

  if (weakReg.test(pwd)) return 'weak'
}
