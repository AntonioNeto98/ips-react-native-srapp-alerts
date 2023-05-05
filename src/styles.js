import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  'ips-rn-srapp-alerts--background': {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 90,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, .7)",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  'ips-rn-srapp-alerts--box': {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 4
  },
  'ips-rn-srapp-alerts--title': {
    marginTop: 25,
    color: "black",
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 1
  },
  'ips-rn-srapp-alerts--content': {
    marginTop: 10,
    color: "black",
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold'
  },
  'ips-rn-srapp-alerts--button': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    marginTop: 7.5,
    borderRadius: 8
  },
  'ips-rn-srapp-alerts--button-title': {
    color: 'white',
    fontSize: 15,
    letterSpacing: 2,
    fontWeight: '700'
  },
  'ips-rn-srapp-alerts--button-confirm': {
    marginTop: 25,
    backgroundColor: '#34A853'
  },
  'ips-rn-srapp-alerts--button-cancel': {
    backgroundColor: '#EA4335'
  },
  'ips-rn-srapp-alerts--icon': {
    position: 'absolute',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1000,
    borderWidth: 4
  },
  'ips-rn-srapp-alerts--table': {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    borderWidth: .5,
    borderTopWidth: 0
  },
  'ips-rn-srapp-alerts--table-field': {
    color: 'black',
    fontWeight: 'bold',
    borderRightWidth: .5,
    paddingVertical: 10,
    marginLeft: 10,
    fontSize: 11,
    width: 62
  },
  'ips-rn-srapp-alerts--table-value': {
    color: 'black',
    paddingVertical: 10,
    fontSize: 11,
    marginLeft: 10
  }
});