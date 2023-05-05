import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// => DEPENDENCIE SETTINGS:
const IPS_RN_SRAPP_ALERTS_SETTINGS = {
  "ICON_SIZE": 40,
  "TYPES_LIST": ["ERROR", "INFO", "SUCCESS", "QUESTION", "WARNING"],
}

// => DEPENDENCIE TYPES DATA:
const IPS_RN_SRAPP_ALERTS_TYPES_DATA = {
  "ERROR": {
    color: "#EA4335",
    element: <Ionicons name="close" size={IPS_RN_SRAPP_ALERTS_SETTINGS["ICON_SIZE"]} color="#EA4335" />,
  },
  "INFO": {
    color: "#4285F4",
    element: <Ionicons name="information" size={IPS_RN_SRAPP_ALERTS_SETTINGS["ICON_SIZE"]} color="#4285F4" />,
  },
  "SUCCESS": {
    color: "#34A853",
    element: <Ionicons name="checkmark" size={IPS_RN_SRAPP_ALERTS_SETTINGS["ICON_SIZE"]} color="#34A853" />,
  },
  "QUESTION": {
    color: "#4285F4",
    element: <AntDesign name="question" size={IPS_RN_SRAPP_ALERTS_SETTINGS["ICON_SIZE"]} color="#4285F4" />,
  },
  "WARNING": {
    color: "#FBBC05",
    element: <Ionicons name="warning-outline" size={IPS_RN_SRAPP_ALERTS_SETTINGS["ICON_SIZE"]} color="#FBBC05" />,
  },
}

// => OTHERS DEPENDENCIE STYLES:
const IPS_RN_SRAPP_ALERTS_FUNCS = {
  "alertRenderIcon": type =>
    <View style={[
      styles['ips-rn-srapp-alerts--icon'], {
        width: IPS_RN_SRAPP_ALERTS_SETTINGS["ICON_SIZE"] + 30,
        height: IPS_RN_SRAPP_ALERTS_SETTINGS["ICON_SIZE"] + 30,
        top: -((IPS_RN_SRAPP_ALERTS_SETTINGS["ICON_SIZE"] + 30) / 2),
        borderColor: IPS_RN_SRAPP_ALERTS_TYPES_DATA[type]["color"]
      }
    ]}>
      {IPS_RN_SRAPP_ALERTS_TYPES_DATA[type]["element"]}
    </View>,
}

// => VARIÁVEIS E FUNCIONALIDADES DO COMPONENTE:

// => COMPONENTE:
function SrApp_Alert({
  title,        // => [ String ] ——→ TÍTULO.
  content,      // => [ String ] ——→ MENSAGEM/TEXTO.
  type,         // => [ String ] ——→ TIPO ———————————————————→ [ "ERROR", "INFO", "SUCCES", "QUESTION", "WARNING" ].
  active,       // => [ BOOLEAN ] —→ CONTROLE DE EXIBIÇÃO ———→ [ true = Exibe | false = Esconde ].
  onConfirm,    // => [ FUNCTION ] → FUNÇÃO DE CONFIRMAÇÃO. —→ ( EXECUTA AO CLICAR NO BOTÃO "CONFIRMAR" ).
  onCancel,     // => [ FUNCTION ] → FUNÇÃO DE CANCELAMENTO. → ( EXECUTA AO CLICAR NO BOTÃO "CANCELAR" ).
  contentTable, // => [ ARRAY ] ———> RENDERIZAR UMA TABELA.
}) {
  // => VARIÁVEIS:
  const ALERT_TYPE = IPS_RN_SRAPP_ALERTS_TYPES_DATA["TYPES_LIST"].includes(type.toUpperCase()) ? type.toUpperCase() : 'INFO';

  // => RENDERIZAÇÃO:
  return (
    <View
      style={[
        styles["ips-rn-srapp-alerts--background"],
        {
          display: active != true ? 'none' : 'flex'
        }
      ]}
    >
      <View
        style={[styles['ips-rn-srapp-alerts--box'], { borderColor: IPS_RN_SRAPP_ALERTS_TYPES_DATA[ALERT_TYPE]["color"] }]}
        onBlur={() => console.log("blur")}
      >
        {IPS_RN_SRAPP_ALERTS_FUNCS["alertRenderIcon"](ALERT_TYPE)}
        <Text
          style={[styles['ips-rn-srapp-alerts--title'], { color: IPS_RN_SRAPP_ALERTS_TYPES_DATA[ALERT_TYPE]["color"] }]}
        >
          {title}
        </Text>
        <Text style={styles['ips-rn-srapp-alerts--content']}>{content}</Text>

        {
          contentTable != undefined && contentTable.map((item, index) =>
            <View
              style={index == 0 ? [styles["ips-rn-srapp-alerts--table"], { borderTopWidth: .5, marginTop: 10 }] : styles["ips-rn-srapp-alerts--table"]}
              key={`${item.field.indexOf(" ") == -1 ? item.field : item.field.split(" ").join("-")}-${index}`}
            >
              <Text style={styles["ips-rn-srapp-alerts--table-field"]}>
                {item.field}
              </Text>
              <Text style={styles["ips-rn-srapp-alerts--table-value"]}>
                {item.value}
              </Text>
            </View>
          )
        }

        <TouchableOpacity
          onPress={onConfirm}
          style={[styles["ips-rn-srapp-alerts--button"], styles["ips-rn-srapp-alerts--button-confirm"]]}
        >
          <Text style={styles["ips-rn-srapp-alerts--button-title"]}>
            CONFIRMAR
          </Text>
        </TouchableOpacity>

        {
          onCancel != undefined &&
          <TouchableOpacity
            onPress={onCancel}
            style={[styles["ips-rn-srapp-alerts--button"], styles["ips-rn-srapp-alerts--button-cancel"]]}
          >
            <Text style={styles["ips-rn-srapp-alerts--button-title"]}>
              CANCELAR
            </Text>
          </TouchableOpacity>
        }
      </View>
    </View>
  )
}

module.exports = {
  all: SrApp_Alert
}