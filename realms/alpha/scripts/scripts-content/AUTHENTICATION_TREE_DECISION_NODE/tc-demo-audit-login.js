/*
 * The contents of this file are subject to the terms of the Common Development and
 * Distribution License (the License). You may not use this file except in compliance with the
 * License.
 *
 * You can obtain a copy of the License at legal/LICENSE.md. See the License for the
 * specific language governing permission and limitations under the License.
 *
 * When distributing Covered Software, include this CDDL Header Notice in each file and include
 * the License file at legal/LICENSE.md.
 */

var nodeConfig = {
  nodeName: "auditLogin",
};

var nodeOutcomes = {
  SUCCESS: "success",
  ERROR: "error",
};

var javaImports = JavaImporter(org.forgerock.openam.auth.node.api.Action);

var nodeLogger = {
  debug: function (message) {
    logger.message("***" + nodeConfig.nodeName + " " + message);
  },
  warning: function (message) {
    logger.warning("***" + nodeConfig.nodeName + " " + message);
  },
  error: function (message) {
    logger.error("***" + nodeConfig.nodeName + " " + message);
  },
};

(function () {
  try {
    nodeLogger.debug("Node starting...");

    auditEntryDetail = {
      event: "Login",
    };

    action = javaImports.Action.goTo(nodeOutcomes.SUCCESS).build();
  } catch (e) {
    logger.error("Exception " + e);
    logger.error("Stack trace " + e.stack);
    action = javaImports.Action.goTo(nodeOutcomes.ERROR).build();
  }
})();
